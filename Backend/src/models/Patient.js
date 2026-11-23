import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    patientId: { type: String, required: true, trim: true, unique: true },
    demographics: {
      name: { type: String, required: true, trim: true, maxlength: 100 },
      dateOfBirth: { type: Date, required: true },
      sex: { type: String, enum: ["female", "male", "intersex", "unknown"], required: true },
    },
    vitals: {
      systolicBp: { type: Number, min: 40, max: 300 },
      diastolicBp: { type: Number, min: 20, max: 200 },
      heartRate: { type: Number, min: 20, max: 250 },
      temperatureC: { type: Number, min: 25, max: 45 },
      bmi: { type: Number, min: 10, max: 100 },
    },
    clinical: {
      diabetes: { type: Boolean, default: false },
      hypertension: { type: Boolean, default: false },
      smokingStatus: { type: String, enum: ["never", "former", "current", "unknown"], default: "unknown" },
      labValues: { type: Map, of: Number, default: {} },
    },
    riskAssessments: [
      {
        type: { type: String, enum: ["cardiovascular", "diabetes", "liver", "copd", "general"], required: true },
        score: { type: Number, required: true, min: 0, max: 1 },
        category: { type: String, enum: ["low", "moderate", "high"], required: true },
        evaluatedAt: { type: Date, default: Date.now },
        modelVersion: { type: String, default: "rule-v1" },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Patient", patientSchema);
