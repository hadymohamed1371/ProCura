# ProCura MERN Backend

The API is an Express/Mongoose service for authentication and patient health records.

## Local setup

1. Copy `.env.example` to `.env`.
2. Replace the MongoDB password and JWT secret with independent long random values.
3. Run `docker compose up --build -d`.
4. Open `http://localhost:5000/api/health`.

Docker starts MongoDB on port `27017` and the API on port `5000`. MongoDB data is persisted in the `procura_mongodb_data` volume.

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

The `/evaluate` endpoint is a clearly labeled rule-based screening demonstration, not a clinical diagnosis or a substitute for a trained ML model.
