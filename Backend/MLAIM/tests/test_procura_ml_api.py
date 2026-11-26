from fastapi.testclient import TestClient

import procura_ml_api


def test_predict_endpoint_runs_each_packaged_model():
    cases = {
        "cardiovascular": {
            "age": 55,
            "gender": 2,
            "height": 175,
            "weight": 90,
            "ap_hi": 150,
            "ap_lo": 95,
            "cholesterol": 3,
            "gluc": 1,
            "smoke": 1,
            "alco": 0,
            "active": 0,
        },
        "copd": {
            "_AGE80": 68,
            "SEXVAR": 1,
            "BMI": 24,
            "SMOKDAY2": 1,
            "EXERANY2": 2,
            "GENHLTH": 5,
        },
        "diabetes": {
            "HighBP": 1,
            "HighChol": 1,
            "CholCheck": 1,
            "BMI": 30,
            "Smoker": 1,
            "Stroke": 0,
            "HeartDiseaseorAttack": 0,
            "PhysActivity": 0,
            "Fruits": 1,
            "Veggies": 1,
            "HvyAlcoholConsump": 0,
            "AnyHealthcare": 1,
            "NoDocbcCost": 0,
            "GenHlth": 3,
            "MentHlth": 0,
            "PhysHlth": 0,
            "DiffWalk": 0,
            "Sex": 1,
            "Age": 8,
            "Education": 5,
            "Income": 6,
        },
    }

    with TestClient(procura_ml_api.app) as client:
        for model_type, features in cases.items():
            response = client.post(f"/predict/{model_type}", json={"features": features})
            assert response.status_code == 200
            result = response.json()
            assert 0 <= result["score"] <= 1
            assert result["category"] in {"low", "moderate", "high"}
            assert result["model_version"]
            assert result["prediction"]


def test_predict_endpoint_reports_missing_model_features():
    with TestClient(procura_ml_api.app) as client:
        response = client.post("/predict/diabetes", json={"features": {"HighBP": 1}})

    assert response.status_code == 422
    assert "missing_features" in response.json()["detail"]


def test_predict_endpoint_rejects_fractional_coded_inputs():
    features = {
        "_AGE80": 68,
        "SEXVAR": 1,
        "BMI": 24,
        "SMOKDAY2": 1,
        "EXERANY2": 2,
        "GENHLTH": 3.5,
    }

    with TestClient(procura_ml_api.app) as client:
        response = client.post("/predict/copd", json={"features": features})

    assert response.status_code == 422
    assert "whole numbers" in response.json()["detail"]
