import { Router } from "express";
import { z } from "zod";
import Patient from "../models/Patient.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
router.use(requireAuth);

const patientSchema = z.object({
  patientId: z.string().trim().min(1).max(100),
  demographics: z.object({
    name: z.string().trim().min(1).max(100),
    dateOfBirth: z.coerce.date(),
    sex: z.enum(["female", "male", "intersex", "unknown"]),
  }),
  vitals: z.object({
    systolicBp: z.number().min(40).max(300).optional(),
    diastolicBp: z.number().min(20).max(200).optional(),
    heartRate: z.number().min(20).max(250).optional(),
    temperatureC: z.number().min(25).max(45).optional(),
    bmi: z.number().min(10).max(100).optional(),
  }).default({}),
  clinical: z.object({
    diabetes: z.boolean().default(false),
    hypertension: z.boolean().default(false),
    smokingStatus: z.enum(["never", "former", "current", "unknown"]).default("unknown"),
    labValues: z.record(z.string(), z.number()).default({}),
  }).default({}),
});

router.post("/", async (req, res, next) => {
  try {
    const data = patientSchema.parse(req.body);
    const patient = await Patient.create({ ...data, owner: req.user.sub });
    return res.status(201).json({ patient });
  } catch (error) {
    return next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const patients = await Patient.find({ owner: req.user.sub }).sort({ createdAt: -1 });
    return res.json({ patients });
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id, owner: req.user.sub });
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    return res.json({ patient });
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const data = patientSchema.partial({ patientId: true, demographics: true, vitals: true, clinical: true }).parse(req.body);
    const patient = await Patient.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.sub },
      { $set: data },
      { new: true, runValidators: true },
    );
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    return res.json({ patient });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const patient = await Patient.findOneAndDelete({ _id: req.params.id, owner: req.user.sub });
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
