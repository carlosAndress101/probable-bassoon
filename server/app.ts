import express from "express";

import cors from "cors";

import authRoutes from "./routes/auth.routes";

import { corsOptions } from "./config";

const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.stack;
  next(error);
});

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json([
    {
      message,
    },
  ]);
});

export default app;
