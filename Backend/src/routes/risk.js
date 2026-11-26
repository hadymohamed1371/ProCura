import { Router } from "express";
import { z } from "zod";
import Patient from "../models/Patient.js";
import { requireAuth } from "../middleware/auth.js";
import { env } from "../config/env.js";

const router = Router();
router.use(requireAuth);

const diseaseTypeSchema = z.enum(["cardiovascular", "heart", "diabetes", "liver", "copd", "general"]);
export const evaluationSchema = z.object({
  type: z.union([
    diseaseTypeSchema,
    z.array(diseaseTypeSchema)
      .min(1)
      .max(6)
      .refine((types) => new Set(types).size === types.length, "Disease types must be unique"),
  ]),
});
const liverPredictionSchema = z.object({
  prediction_id: z.string(),
  probability: z.number().min(0).max(1),
  prediction_label: z.string(),
  risk_category: z.enum(["Low", "Moderate", "High"]),
  decision_threshold: z.number().min(0).max(1),
  model_version: z.string(),
  disclaimer: z.string(),
});
const diseaseModelPredictionSchema = z.object({
  score: z.number().min(0).max(1),
  category: z.enum(["low", "moderate", "high"]),
  model_version: z.string(),
  prediction: z.record(z.string(), z.unknown()),
  disclaimer: z.string(),
});
const DISEASE_MODEL_FEATURES = {
  cardiovascular: [
    "age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol",
    "gluc", "smoke", "alco", "active",
  ],
  heart: [
    "age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol",
    "gluc", "smoke", "alco", "active",
  ],
  diabetes: [
    "HighBP", "HighChol", "CholCheck", "BMI", "Smoker", "Stroke",
    "HeartDiseaseorAttack", "PhysActivity", "Fruits", "Veggies",
    "HvyAlcoholConsump", "AnyHealthcare", "NoDocbcCost", "GenHlth",
    "MentHlth", "PhysHlth", "DiffWalk", "Sex", "Age", "Education", "Income",
  ],
  copd: ["_AGE80", "SEXVAR", "BMI", "SMOKDAY2", "EXERANY2", "GENHLTH"],
};

class EvaluationError extends Error {
  constructor(status, message, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export async function evaluateDiseaseModel(patient, type) {
  const labValues = patient.clinical?.labValues ?? {};
  const features = {};
  const missingFeatures = [];
  const invalidFeatures = [];

  for (const name of DISEASE_MODEL_FEATURES[type]) {
    const value =
      labValues.get?.(`${type}:${name}`) ??
      labValues[`${type}:${name}`] ??
      labValues.get?.(name) ??
      labValues[name];
    if (value === undefined || value === null || value === "") {
      missingFeatures.push(name);
      continue;
    }
    const numericValue = Number(value);
    if (typeof value === "boolean" || !Number.isFinite(numericValue)) {
      invalidFeatures.push(name);
      continue;
    }
    features[name] = numericValue;
  }

  if (missingFeatures.length > 0) {
    throw new EvaluationError(422, `Missing ${type} model inputs`, missingFeatures);
  }
  if (invalidFeatures.length > 0) {
    throw new EvaluationError(422, `Invalid ${type} model inputs`, invalidFeatures);
  }

  const modelType = type === "heart" ? "cardiovascular" : type;
  let mlResponse;
  try {
    mlResponse = await fetch(`${env.DISEASE_ML_API_URL.replace(/\/$/, "")}/predict/${modelType}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features }),
    });
  } catch (error) {
    console.error(`${type} ML request failed:`, error);
    throw new EvaluationError(503, `${type} ML service is unavailable`);
  }

  let rawPrediction;
  try {
    rawPrediction = await mlResponse.json();
  } catch {
    throw new EvaluationError(502, `${type} ML service returned an invalid response`);
  }
  if (!mlResponse.ok) {
    throw new EvaluationError(
      mlResponse.status === 422 || mlResponse.status === 503 ? mlResponse.status : 502,
      `${type} ML prediction failed`,
      rawPrediction.detail ?? rawPrediction,
    );
  }
  const predictionResult = diseaseModelPredictionSchema.safeParse(rawPrediction);
  if (!predictionResult.success) {
    throw new EvaluationError(502, `${type} ML service returned an unsupported prediction response`);
  }
  const prediction = predictionResult.data;
  return {
    assessment: {
      type,
      score: prediction.score,
      category: prediction.category,
      modelVersion: prediction.model_version,
    },
    prediction: prediction.prediction,
    disclaimer: prediction.disclaimer,
  };
}

async function evaluateDisease(patient, type) {
  if (type === "liver") {
    if (!env.LIVER_ML_API_KEY) {
      throw new EvaluationError(503, "Liver ML service is not configured");
    }
    const sex = patient.demographics?.sex;
    const labValues = patient.clinical?.labValues ?? {};
    const getLiverValue = (name) =>
      labValues.get?.(`liver:${name}`) ??
      labValues[`liver:${name}`] ??
      labValues.get?.(name) ??
      labValues[name];
    const genderValue = sex === "male" || sex === "female" ? sex : getLiverValue("gender");
    const normalizedGender = typeof genderValue === "string" ? genderValue.toLowerCase() : "";
    if (normalizedGender !== "male" && normalizedGender !== "female") {
      throw new EvaluationError(422, "Liver screening requires a recorded male or female sex value");
    }

    const features = {
      total_bilirubin: getLiverValue("total_bilirubin"),
      direct_bilirubin: getLiverValue("direct_bilirubin"),
      alkaline_phosphotase: getLiverValue("alkaline_phosphotase"),
      alamine_aminotransferase: getLiverValue("alamine_aminotransferase"),
      aspartate_aminotransferase: getLiverValue("aspartate_aminotransferase"),
      total_proteins: getLiverValue("total_proteins"),
      albumin: getLiverValue("albumin"),
      albumin_and_globulin_ratio: getLiverValue("albumin_and_globulin_ratio"),
    };
    const missingFeatures = Object.entries(features)
      .filter(([, value]) => value === undefined || value === null)
      .map(([name]) => name);
    if (missingFeatures.length > 0) {
      throw new EvaluationError(422, "Missing liver test values", missingFeatures);
    }

    let age = Number(getLiverValue("age"));
    if (patient.demographics?.dateOfBirth) {
      const dateOfBirth = new Date(patient.demographics.dateOfBirth);
      const today = new Date();
      age = today.getFullYear() - dateOfBirth.getFullYear() -
        (today < new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate()) ? 1 : 0);
    }
    if (!Number.isInteger(age) || age < 1 || age > 120) {
      throw new EvaluationError(422, "Liver screening requires a patient age between 1 and 120 years");
    }

    let mlResponse;
    try {
      mlResponse = await fetch(`${env.LIVER_ML_API_URL.replace(/\/$/, "")}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": env.LIVER_ML_API_KEY,
        },
        body: JSON.stringify({ age, gender: normalizedGender === "male" ? "Male" : "Female", ...features }),
      });
    } catch (error) {
      console.error("Liver ML request failed:", error);
      throw new EvaluationError(503, "Liver ML service is unavailable");
    }

    let rawPrediction;
    try {
      rawPrediction = await mlResponse.json();
    } catch {
      throw new EvaluationError(502, "Liver ML service returned an invalid response");
    }
    if (!mlResponse.ok) {
      throw new EvaluationError(
        mlResponse.status === 422 ? 422 : 502,
        "Liver ML prediction failed",
        rawPrediction.detail ?? rawPrediction,
      );
    }
    const predictionResult = liverPredictionSchema.safeParse(rawPrediction);
    if (!predictionResult.success) {
      throw new EvaluationError(502, "Liver ML service returned an unsupported prediction response");
    }
    const prediction = predictionResult.data;
    return {
      assessment: {
        type,
        score: prediction.probability,
        category: prediction.risk_category.toLowerCase(),
        modelVersion: prediction.model_version,
        predictionId: prediction.prediction_id,
        predictionLabel: prediction.prediction_label,
        decisionThreshold: prediction.decision_threshold,
      },
      prediction,
      disclaimer: prediction.disclaimer,
    };
  }

  if (Object.hasOwn(DISEASE_MODEL_FEATURES, type)) {
    return evaluateDiseaseModel(patient, type);
  }

  let score = 0.1;
  if (patient.clinical?.diabetes) score += 0.25;
  if (patient.clinical?.hypertension) score += 0.25;
  if (patient.clinical?.smokingStatus === "current") score += 0.2;
  if ((patient.vitals?.bmi ?? 0) >= 30) score += 0.15;
  if ((patient.vitals?.systolicBp ?? 0) >= 140) score += 0.15;
  score = Math.min(score, 1);
  const category = score >= 0.7 ? "high" : score >= 0.4 ? "moderate" : "low";

  return {
    assessment: { type, score, category, modelVersion: "general-rule-v1" },
    disclaimer: "Rule-based screening support only. It is not a medical diagnosis.",
  };
}

router.post("/patients/:id/evaluate", async (req, res, next) => {
  try {
    const { type } = evaluationSchema.parse(req.body);
    const types = Array.isArray(type) ? type : [type];
    const patient = await Patient.findOne({ _id: req.params.id, owner: req.user.sub });
    if (!patient) return res.status(404).json({ error: "Patient not found" });

    const results = [];
    const errors = [];
    for (const diseaseType of types) {
      try {
        const result = await evaluateDisease(patient, diseaseType);
        patient.riskAssessments.push(result.assessment);
        results.push({
          type: diseaseType,
          assessment: patient.riskAssessments.at(-1),
          ...(result.prediction ? { prediction: result.prediction } : {}),
          disclaimer: result.disclaimer,
        });
      } catch (error) {
        if (!(error instanceof EvaluationError)) throw error;
        errors.push({
          type: diseaseType,
          error: error.message,
          ...(error.details !== undefined ? { details: error.details } : {}),
          status: error.status,
        });
      }
    }

    if (results.length > 0) await patient.save();
    if (!Array.isArray(type)) {
      if (errors.length > 0) {
        const { status, ...errorBody } = errors[0];
        return res.status(status).json(errorBody);
      }
      const { assessment, prediction, disclaimer } = results[0];
      return res.status(201).json({
        assessment,
        ...(prediction ? { prediction } : {}),
        disclaimer,
      });
    }

    const status = errors.length === 0 ? 201 : results.length > 0 ? 207 : errors[0].status;
    return res.status(status).json({ results, errors });
  } catch (error) {
    return next(error);
  }
});

export default router;
