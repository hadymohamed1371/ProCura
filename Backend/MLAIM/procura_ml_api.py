"""Internal prediction API for the packaged cardiovascular, COPD, and diabetes models."""

from __future__ import annotations

import math
from contextlib import asynccontextmanager
from typing import Any, Literal

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ConfigDict, field_validator

from Cardio_Packaging import load_model as load_cardio_model
from Cardio_Packaging import predict_risk as predict_cardio
from COPD_Packaging import load_model as load_copd_model
from COPD_Packaging import predict_risk as predict_copd
from production.predict import load_model as load_diabetes_model
from production.predict import predict_risk as predict_diabetes

ModelType = Literal["cardiovascular", "copd", "diabetes"]
MODEL_FEATURES = {
    "cardiovascular": {
        "age", "gender", "height", "weight", "ap_hi", "ap_lo",
        "cholesterol", "gluc", "smoke", "alco", "active",
    },
    "copd": {"_AGE80", "SEXVAR", "BMI", "SMOKDAY2", "EXERANY2", "GENHLTH"},
    "diabetes": {
        "HighBP", "HighChol", "CholCheck", "BMI", "Smoker", "Stroke",
        "HeartDiseaseorAttack", "PhysActivity", "Fruits", "Veggies",
        "HvyAlcoholConsump", "AnyHealthcare", "NoDocbcCost", "GenHlth",
        "MentHlth", "PhysHlth", "DiffWalk", "Sex", "Age", "Education", "Income",
    },
}
DIABETES_BINARY_FEATURES = {
    "HighBP", "HighChol", "CholCheck", "Smoker", "Stroke", "HeartDiseaseorAttack",
    "PhysActivity", "Fruits", "Veggies", "HvyAlcoholConsump", "AnyHealthcare",
    "NoDocbcCost", "DiffWalk", "Sex",
}
DIABETES_INTEGER_FEATURES = DIABETES_BINARY_FEATURES | {
    "GenHlth", "MentHlth", "PhysHlth", "Age", "Education", "Income",
}
COPD_INTEGER_FEATURES = {"_AGE80", "SEXVAR", "SMOKDAY2", "EXERANY2", "GENHLTH"}


class PredictionRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")

    features: dict[str, float]

    @field_validator("features", mode="before")
    @classmethod
    def reject_boolean_or_non_finite_features(cls, values: Any) -> Any:
        if not isinstance(values, dict):
            raise ValueError("features must be an object of numeric values")
        for name, value in values.items():
            if isinstance(value, bool):
                raise ValueError(f"{name} must be a number, not a boolean")
            try:
                if not math.isfinite(float(value)):
                    raise ValueError(f"{name} must be finite")
            except (OverflowError, TypeError, ValueError) as error:
                raise ValueError(f"{name} must be a finite number") from error
        return values


@asynccontextmanager
async def lifespan(_app: FastAPI):
    load_cardio_model()
    load_copd_model()
    load_diabetes_model()
    yield


app = FastAPI(title="ProCura ML Inference API", lifespan=lifespan)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "healthy"}


def _validate_feature_set(model_type: ModelType, features: dict[str, float]) -> None:
    expected = MODEL_FEATURES[model_type]
    missing = sorted(expected - features.keys())
    unexpected = sorted(features.keys() - expected)
    if missing or unexpected:
        raise HTTPException(
            status_code=422,
            detail={"missing_features": missing, "unexpected_features": unexpected},
        )

    if model_type == "copd":
        non_integer = sorted(
            name for name in COPD_INTEGER_FEATURES if not features[name].is_integer()
        )
        if non_integer:
            raise HTTPException(
                status_code=422,
                detail=f"COPD coded features must be whole numbers: {non_integer}",
            )

    if model_type == "diabetes":
        non_integer = sorted(
            name for name in DIABETES_INTEGER_FEATURES if not features[name].is_integer()
        )
        if non_integer:
            raise HTTPException(
                status_code=422,
                detail=f"Diabetes coded features must be whole numbers: {non_integer}",
            )
        invalid_binary = sorted(
            name for name in DIABETES_BINARY_FEATURES if features[name] not in (0, 1)
        )
        if invalid_binary:
            raise HTTPException(
                status_code=422,
                detail=f"Diabetes binary features must be 0 or 1: {invalid_binary}",
            )
        coded_ranges = {"GenHlth": (1, 5), "Age": (1, 13), "Education": (1, 6), "Income": (1, 8)}
        invalid_ranges = {
            name: [minimum, maximum]
            for name, (minimum, maximum) in coded_ranges.items()
            if not minimum <= features[name] <= maximum
        }
        for name in ("MentHlth", "PhysHlth"):
            if not 0 <= features[name] <= 30:
                invalid_ranges[name] = [0, 30]
        if not 12 <= features["BMI"] <= 98:
            invalid_ranges["BMI"] = [12, 98]
        if invalid_ranges:
            raise HTTPException(status_code=422, detail={"out_of_range_features": invalid_ranges})


@app.post("/predict/{model_type}")
def predict(model_type: ModelType, request: PredictionRequest) -> dict[str, Any]:
    features = request.features
    _validate_feature_set(model_type, features)

    try:
        if model_type == "cardiovascular":
            prediction = predict_cardio(features)
            score = prediction["risk_score"]
            category = prediction["risk_level"].lower()
            model_version = prediction["model_version"]
        elif model_type == "copd":
            prediction = predict_copd(features)
            score = prediction["Risk Score (%)"] / 100
            category = prediction["Category"].replace(" Risk", "").lower()
            model_version = str(load_copd_model().get("trained_at", "copd-lightgbm-v1"))
        else:
            prediction = predict_diabetes(features)
            score = prediction["risk_score"]
            category = {"low": "low", "elevated": "moderate", "high": "high"}[
                prediction["risk_level"].lower()
            ]
            model_version = str(
                load_diabetes_model().get("trained_at", "diabetes-lightgbm-v1")
            )
    except FileNotFoundError as error:
        raise HTTPException(status_code=503, detail="Prediction model artifact is unavailable") from error
    except (TypeError, ValueError) as error:
        raise HTTPException(status_code=422, detail=str(error)) from error

    return {
        "score": float(score),
        "category": category,
        "model_version": model_version,
        "prediction": prediction,
        "disclaimer": prediction.get("disclaimer", "Screening aid only - not a diagnosis."),
    }
