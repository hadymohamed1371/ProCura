# ProCura MERN Backend

The API is an Express/Mongoose service for authentication and patient health records.
See [SYSTEM_ARCHITECTURE.md](SYSTEM_ARCHITECTURE.md) for the backend and ML file structure and system architecture.

## Local setup

1. Copy `.env.example` to `.env`.
2. Replace the MongoDB password, JWT secret, and Liver ML API key with independent long random values.
3. Start MongoDB locally on port `27017`.
4. Start the API with `npm run dev`.
5. Start the ML services as described below.
6. Open `http://localhost:5000/api/health`.

MongoDB and the API normally run on ports `27017` and `5000`, respectively.
Patient records are stored in the `disease_DB` database by default (`MONGO_DB` can override the database name).

## API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/patients`
- `GET /api/patients`
- `GET /api/patients/:id`
- `PUT /api/patients/:id`
- `DELETE /api/patients/:id`
- `POST /api/patients/:id/evaluate`

Send `Authorization: Bearer <token>` for protected endpoints.

The Cardiovascular, Heart, COPD, and Diabetes `/evaluate` requests call their packaged predictors through the internal `MLAIM/procura_ml_api.py` service. Heart uses the Cardiovascular model and input schema; it is not a separate model. Liver requests proxy to the separate Liver prediction API. General requests remain rule-based. These results are screening support, not medical diagnoses.

Set `LIVER_ML_API_KEY` in `Backend/.env`; it is used only for the backend-to-Liver-API request and must not be put in the frontend. For a local Node development server, install `Backend/MLAIM/inference-requirements.txt`, then run the disease-model service from `Backend/MLAIM` with `uvicorn procura_ml_api:app --host 127.0.0.1 --port 8001`. Set `DISEASE_ML_API_URL=http://localhost:8001` in the backend environment.

The Cardiovascular and COPD model artifacts are packaged in `Backend/MLAIM/artifacts`. If regenerating them, run `python Cardio_Packaging.py` and `python COPD_Packaging.py` from `Backend/MLAIM` before building the ML service. The Diabetes artifact is already packaged there.

Save the patient's input values first; `/evaluate` reads the saved record. Evaluate one disease with a string as before, or request several in one call by passing a unique array of disease types:

```json
{
  "type": ["cardiovascular", "heart", "diabetes", "liver", "copd", "general"]
}
```

Array requests return a `results` list containing each completed assessment and an `errors` list for any disease that could not be evaluated. Successful assessments are saved even when another requested disease fails; a partial result uses HTTP `207`. A single-string request keeps its original response format. Each result includes the model version and its model-specific prediction details.

The patient-info page has no sign-in or registration controls. If the frontend already has a valid `procuraToken` in session storage, the page loads and saves the latest patient record for that account. The patient API remains protected; configure the frontend API origin with `VITE_API_BASE_URL` (see `Frontend/.env.example`).

## Patient input parameters

The patient-info screens now use named model features and inline descriptions. Values are stored under `clinical.labValues` with disease-prefixed keys, for example `cardiovascular:age`, `copd:BMI`, `diabetes:HighBP`, `heart:ap_hi`, and `liver:total_bilirubin`. This keeps similarly named fields from different models separate.

The ML modules use the following real input features. These names and encodings come from their training/inference code:

### Cardiovascular

The Cardio model uses 11 features; `id` and the target column `cardio` are not inputs.

| Feature | Meaning / encoding |
| --- | --- |
| `age` | Age in years; the source dataset stores days and training converts it to years. |
| `gender` | `1` = female, `2` = male. |
| `height` | Height in centimeters. |
| `weight` | Weight in kilograms. |
| `ap_hi` | Systolic blood pressure, mmHg. |
| `ap_lo` | Diastolic blood pressure, mmHg. |
| `cholesterol` | `1` = normal, `2` = above normal, `3` = well above normal. |
| `gluc` | Glucose category: `1` = normal, `2` = above normal, `3` = well above normal. |
| `smoke` | Smoking indicator: `0` = no, `1` = yes. |
| `alco` | Alcohol indicator: `0` = no, `1` = yes. |
| `active` | Physical activity indicator: `0` = no, `1` = yes. |

### COPD

The trained COPD model uses `_AGE80`, `SEXVAR`, `BMI`, `SMOKDAY2`, `EXERANY2`, and `GENHLTH`. `SMOKE100` may also be supplied to the inference helper to set `SMOKDAY2` for never-smokers; it is not itself a trained feature.

| Feature | Meaning / encoding |
|---|---|
| `_AGE80` | Age in years, `18–80` (`80` represents 80+). |
| `SEXVAR` | `1` = male, `2` = female. |
| `BMI` | Body mass index, not multiplied by 100. |
| `SMOKDAY2` | Smoking frequency: `0` = never smoked, `1` = every day, `2` = some days, `3` = not at all/former smoker. |
| `EXERANY2` | Any exercise in the past 30 days: `1` = yes, `2` = no. |
| `GENHLTH` | General health: `1` = excellent through `5` = poor. |
| `SMOKE100` (helper only) | Smoked at least 100 cigarettes in life: `1` = yes, `2` = no. |

### Diabetes

The CDC/BRFSS diabetes model expects these 21 features. `Diabetes_012` is the dataset target, not an input.

| Feature | Meaning / encoding |
|---|---|
| `HighBP`, `HighChol`, `CholCheck`, `Smoker`, `Stroke`, `HeartDiseaseorAttack`, `PhysActivity`, `Fruits`, `Veggies`, `HvyAlcoholConsump`, `AnyHealthcare`, `NoDocbcCost`, `DiffWalk` | Binary survey fields: `0` = no, `1` = yes. |
| `BMI` | Body mass index. |
| `GenHlth` | General health: `1` = excellent through `5` = poor. |
| `MentHlth`, `PhysHlth` | Number of days (0–30) of poor mental or physical health in the past 30 days. |
| `Sex` | `0` = female, `1` = male. |
| `Age` | Age band: `1` = 18–24, `2` = 25–29, then increasing age bands through `13` = 80+. |
| `Education` | Education category, `1–6`. |
| `Income` | Income category, `1–8`. |

### Heart

There is no separate Heart-specific ML model in the backend ML modules. The Heart screen uses the cardiovascular feature set above and saves it under the `heart:` prefix. This is a shared input schema, not a separate Heart prediction model.

### Liver

The liver prediction API requires all 10 features below. It does not accept generic `Parameter 1–4` values as substitutes.

| API feature | Meaning / unit |
|---|---|
| `age` | Age in years. |
| `gender` | `"Male"` or `"Female"`. |
| `total_bilirubin` | Total bilirubin, mg/dL. |
| `direct_bilirubin` | Direct bilirubin, mg/dL. |
| `alkaline_phosphotase` | Alkaline phosphatase, IU/L. |
| `alamine_aminotransferase` | Alanine aminotransferase (ALT/SGPT), IU/L. |
| `aspartate_aminotransferase` | Aspartate aminotransferase (AST/SGOT), IU/L. |
| `total_proteins` | Total serum proteins, g/dL. |
| `albumin` | Serum albumin, g/dL. |
| `albumin_and_globulin_ratio` | Albumin-to-globulin ratio. |

The Liver screen now collects these named features. To request its `/evaluate` proxy, save the patient record and send `POST /api/patients/:id/evaluate` with `{"type":"liver"}`. Run the Liver prediction service locally and supply its backend-only API key. These results are screening support, not a diagnosis.
