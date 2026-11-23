import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { env } from "../config/env.js";
import User from "../models/User.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
const credentialsSchema = z.object({
  name: z.string().trim().min(2).max(100).optional(),
  email: z.email().transform((value) => value.toLowerCase()),
  password: z.string().min(12).max(128),
  role: z.enum(["patient", "clinician", "admin"]).optional(),
});

function signToken(user) {
  return jwt.sign({ sub: user.id, role: user.role }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
}

router.post("/register", async (req, res, next) => {
  try {
    const data = credentialsSchema.extend({ name: z.string().trim().min(2).max(100) }).parse(req.body);
    if (await User.exists({ email: data.email })) {
      return res.status(409).json({ error: "Email is already registered" });
    }
    const user = new User({ name: data.name, email: data.email, role: data.role ?? "patient" });
    await user.setPassword(data.password);
    await user.save();
    return res.status(201).json({
      token: signToken(user),
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const data = credentialsSchema.omit({ name: true, role: true }).parse(req.body);
    const user = await User.findOne({ email: data.email }).select("+passwordHash");
    if (!user || !(await user.verifyPassword(data.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    return res.json({
      token: signToken(user),
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/me", requireAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.sub).select("-passwordHash");
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json({ user });
  } catch (error) {
    return next(error);
  }
});

export default router;
