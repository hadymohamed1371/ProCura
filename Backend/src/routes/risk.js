import { Router } from "express";
import { z } from "zod";
import Patient from "../models/Patient.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
router.use(requireAuth);

const evaluationSchema = z.object({
  type: z.enum(["cardiovascular", "diabetes", "liver", "copd", "general"]),
});

router.post("/patients/:id/evaluate", async (req, res, next) => {
  try {
    const { type } = evaluationSchema.parse(req.body);
    const patient = await Patient.findOne({ _id: req.params.id, owner: req.user.sub });
    if (!patient) return res.status(404).json({ error: "Patient not found" });

    let score = 0.1;
    if (patient.clinical?.diabetes) score += 0.25;
    if (patient.clinical?.hypertension) score += 0.25;
    if (patient.clinical?.smokingStatus === "current") score += 0.2;
    if ((patient.vitals?.bmi ?? 0) >= 30) score += 0.15;
    if ((patient.vitals?.systolicBp ?? 0) >= 140) score += 0.15;
    score = Math.min(score, 1);
    const category = score >= 0.7 ? "high" : score >= 0.4 ? "moderate" : "low";

    patient.riskAssessments.push({
      type,
      score,
      category,
      modelVersion: "rule-v1",
    });
    await patient.save();
    return res.status(201).json({
      assessment: patient.riskAssessments.at(-1),
      disclaimer: "Rule-based screening support only. It is not a medical diagnosis.",
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
