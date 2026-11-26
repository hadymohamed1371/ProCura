import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  MONGO_URI: z.string().min(1),
  MONGO_DB: z.string().default("disease_DB"),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default("7d"),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  LIVER_ML_API_URL: z.url().default("http://localhost:8000"),
  LIVER_ML_API_KEY: z.string().default(""),
  DISEASE_ML_API_URL: z.url().default("http://localhost:8001"),
});

export const env = schema.parse(process.env);
