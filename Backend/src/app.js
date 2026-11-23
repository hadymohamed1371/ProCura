import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import { ZodError } from "zod";
import { env } from "./config/env.js";
import authRoutes from "./routes/auth.js";
import patientRoutes from "./routes/patients.js";
import riskRoutes from "./routes/risk.js";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()), credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: "draft-8" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api", riskRoutes);

app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

app.use((error, _req, res, _next) => {
  if (error instanceof ZodError) {
    return res.status(400).json({ error: "Invalid request", details: error.issues });
  }
  if (error?.code === 11000) {
    return res.status(409).json({ error: "Duplicate value" });
  }
  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
});
