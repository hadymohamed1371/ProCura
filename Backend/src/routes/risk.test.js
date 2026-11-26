import assert from "node:assert/strict";
import { test } from "node:test";
import { evaluationSchema, evaluateDiseaseModel } from "./risk.js";

test("evaluation accepts multiple unique disease types", () => {
  const parsed = evaluationSchema.safeParse({
    type: ["cardiovascular", "heart", "diabetes", "liver", "copd", "general"],
  });

  assert.equal(parsed.success, true);
});

test("evaluation still accepts one disease and rejects invalid arrays", () => {
  assert.equal(evaluationSchema.safeParse({ type: "liver" }).success, true);
  assert.equal(evaluationSchema.safeParse({ type: [] }).success, false);
  assert.equal(evaluationSchema.safeParse({ type: ["copd", "copd"] }).success, false);
  assert.equal(evaluationSchema.safeParse({ type: ["unknown"] }).success, false);
});

test("disease evaluations call their packaged model endpoint with saved namespaced inputs", async () => {
  const originalFetch = global.fetch;
  const calls = [];
  global.fetch = async (url, options) => {
    calls.push({ url, body: JSON.parse(options.body) });
    return {
      ok: true,
      json: async () => ({
        score: 0.2,
        category: "moderate",
        model_version: "test-model-v1",
        prediction: { risk_score: 0.2 },
        disclaimer: "Screening aid only.",
      }),
    };
  };

  const featureNames = {
    cardiovascular: ["age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active"],
    heart: ["age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active"],
    diabetes: ["HighBP", "HighChol", "CholCheck", "BMI", "Smoker", "Stroke", "HeartDiseaseorAttack", "PhysActivity", "Fruits", "Veggies", "HvyAlcoholConsump", "AnyHealthcare", "NoDocbcCost", "GenHlth", "MentHlth", "PhysHlth", "DiffWalk", "Sex", "Age", "Education", "Income"],
    copd: ["_AGE80", "SEXVAR", "BMI", "SMOKDAY2", "EXERANY2", "GENHLTH"],
  };
  const labValues = new Map(
    Object.entries(featureNames).flatMap(([type, names]) =>
      names.map((name) => [`${type}:${name}`, 1]),
    ),
  );
  const patient = { clinical: { labValues } };

  try {
    for (const type of Object.keys(featureNames)) {
      const result = await evaluateDiseaseModel(patient, type);
      assert.equal(result.assessment.type, type);
      assert.equal(result.assessment.modelVersion, "test-model-v1");
    }
  } finally {
    global.fetch = originalFetch;
  }

  assert.equal(calls[0].url.endsWith("/predict/cardiovascular"), true);
  assert.equal(calls[1].url.endsWith("/predict/cardiovascular"), true);
  assert.equal(calls[2].url.endsWith("/predict/diabetes"), true);
  assert.equal(calls[3].url.endsWith("/predict/copd"), true);
  assert.equal(calls[0].body.features.age, 1);
});
