"""Train, package, and run inference for the cardiovascular risk model."""

from __future__ import annotations

from collections.abc import Mapping
from functools import lru_cache
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from catboost import CatBoostClassifier
from sklearn.model_selection import train_test_split

ROOT = Path(__file__).resolve().parent
MODEL_PATH = ROOT / "artifacts" / "cardio_risk_model.joblib"
MODEL_VERSION = "cardiovascular-catboost-v1"
FEATURES = [
    "age",
    "gender",
    "height",
    "weight",
    "ap_hi",
    "ap_lo",
    "cholesterol",
    "gluc",
    "smoke",
    "alco",
    "active",
]
CODED_VALUES = {
    "gender": {1, 2},
    "cholesterol": {1, 2, 3},
    "gluc": {1, 2, 3},
    "smoke": {0, 1},
    "alco": {0, 1},
    "active": {0, 1},
}
RANGES = {
    "age": (1, 120),
    "height": (120, 220),
    "weight": (40, 180),
    "ap_hi": (80, 220),
    "ap_lo": (40, 140),
}
DISCLAIMER = "Screening aid only - not a diagnosis."


def train_and_save() -> Path:
    """Train the model from cardio_train.csv and save its inference bundle."""
    data = pd.read_csv(ROOT / "cardio_train.csv", sep=";")
    data = data[
        data["ap_hi"].between(80, 220)
        & data["ap_lo"].between(40, 140)
        & data["height"].between(120, 220)
        & data["weight"].between(40, 180)
    ].copy()
    data["age"] = data["age"] / 365.25
    X = data[FEATURES]
    y = data["cardio"]
    X_train, _, y_train, _ = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    model = CatBoostClassifier(
        iterations=100,
        learning_rate=0.05,
        depth=6,
        l2_leaf_reg=13,
        random_strength=0,
        random_seed=42,
        verbose=False,
        allow_writing_files=False,
    )
    model.fit(X_train, y_train)
    MODEL_PATH.parent.mkdir(parents=True, exist_ok=True)
    joblib.dump(
        {"model": model, "features": FEATURES, "model_version": MODEL_VERSION},
        MODEL_PATH,
        compress=3,
    )
    return MODEL_PATH


@lru_cache(maxsize=1)
def load_model(model_path: str | Path = MODEL_PATH) -> dict:
    path = Path(model_path)
    if not path.exists():
        raise FileNotFoundError(f"Model artifact not found at {path}. Run Cardio_Packaging.py to train it.")
    return joblib.load(path)


def _to_frame(patient_data) -> tuple[pd.DataFrame, bool]:
    is_single = isinstance(patient_data, Mapping)
    if is_single:
        frame = pd.DataFrame([patient_data])
    elif isinstance(patient_data, pd.DataFrame):
        frame = patient_data.copy()
    else:
        frame = pd.DataFrame(list(patient_data))

    missing = [feature for feature in FEATURES if feature not in frame.columns]
    if missing:
        raise ValueError(f"Missing patient fields: {missing}")
    frame = frame[FEATURES].apply(pd.to_numeric, errors="raise")
    values = frame.to_numpy(dtype=float)
    if not np.isfinite(values).all():
        raise ValueError("All cardiovascular fields must be finite numbers.")

    for field, allowed in CODED_VALUES.items():
        invalid = ~frame[field].isin(allowed)
        if invalid.any():
            raise ValueError(f"{field} must be one of {sorted(allowed)}.")
    for field, (minimum, maximum) in RANGES.items():
        invalid = ~frame[field].between(minimum, maximum)
        if invalid.any():
            raise ValueError(f"{field} must be between {minimum} and {maximum}.")
    return frame, is_single


def predict_risk(patient_data, model_path: str | Path = MODEL_PATH):
    """Predict risk for one patient dictionary or a sequence/DataFrame of patients."""
    bundle = load_model(model_path)
    frame, is_single = _to_frame(patient_data)
    scores = bundle["model"].predict_proba(frame[bundle["features"]])[:, 1]

    results = []
    for score in scores:
        level = "Low" if score < 0.33 else "Moderate" if score < 0.66 else "High"
        results.append(
            {
                "Risk Score (%)": round(float(score) * 100, 2),
                "Category": f"{level} Risk",
                "risk_score": round(float(score), 4),
                "risk_level": level,
                "model_version": bundle["model_version"],
                "disclaimer": DISCLAIMER,
            }
        )
    return results[0] if is_single else results


if __name__ == "__main__":
    artifact = train_and_save()
    print(f"Saved cardiovascular model to {artifact}")
    sample_patient = {
        "gender": 2,
        "height": 175.0,
        "weight": 90.0,
        "ap_hi": 150,
        "ap_lo": 95,
        "cholesterol": 3,
        "gluc": 1,
        "smoke": 1,
        "alco": 0,
        "active": 0,
        "age": 55.0,
    }
    print(predict_risk(sample_patient))
