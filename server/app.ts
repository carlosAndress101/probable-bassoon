import { Request, Response, NextFunction } from 'express'; // Import necessary type
import express from "express";

import cors from "cors";

import authRoutes from "./routes/auth.routes";

import { corsOptions } from "./config";
import { HttpError } from 'http-errors';

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


app.use((err:HttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json([
    {
      message,
    },
  ]);
});

export default app;
