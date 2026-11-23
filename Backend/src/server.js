import mongoose from "mongoose";
import { app } from "./app.js";
import { env } from "./config/env.js";

async function start() {
  await mongoose.connect(env.MONGO_URI);
  const server = app.listen(env.PORT, () => {
    console.log(`ProCura API listening on http://localhost:${env.PORT}`);
  });

  const shutdown = async (signal) => {
    console.log(`${signal} received; shutting down`);
    await mongoose.disconnect();
    server.close(() => process.exit(0));
  };

  process.once("SIGINT", () => shutdown("SIGINT"));
  process.once("SIGTERM", () => shutdown("SIGTERM"));
}

start().catch((error) => {
  console.error("Failed to start API:", error);
  process.exit(1);
});
