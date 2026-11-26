# Local Deployment Guide — Liver Disease Prediction System

Run the FastAPI backend and Streamlit frontend directly on the host.

## Prerequisites

- Python 3.11+ (Python 3.12 is verified)
- A virtual environment with the project requirements installed

## 1. Configure the Environment

Copy `.env.example` to `.env` and generate a strong API key:

```powershell
Copy-Item .env.example .env
.venv\Scripts\python.exe -c "import secrets; print(secrets.token_urlsafe(32))"
```

Set the generated value as `LIVER_API_KEY` in `.env`. Never commit `.env`.

## 2. Start the FastAPI Backend

```powershell
$env:PYTHONPATH="src"
$env:LIVER_API_KEY="your-strong-random-api-key"
.venv\Scripts\uvicorn.exe liver_disease.api.main:app --host 127.0.0.1 --port 8000
```

Verify the service:

- Health: `http://127.0.0.1:8000/health`
- Swagger UI: `http://127.0.0.1:8000/docs`

## 3. Start the Streamlit Frontend

Use a second terminal:

```powershell
$env:API_BASE_URL="http://127.0.0.1:8000"
$env:LIVER_API_KEY="your-strong-random-api-key"
.venv\Scripts\streamlit.exe run frontend\app.py --server.port 8501
```

Open `http://127.0.0.1:8501`.

## 4. Run Tests

```powershell
.venv\Scripts\pytest.exe tests -v
.venv\Scripts\python.exe scripts\verify_live_api.py
```
