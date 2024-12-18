import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware order matters!

// CORS setup (allow frontend to access backend)
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// Parse incoming JSON and form data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

// Serve static files (like images, CSS, JS)
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

//http://localhost:4000/api/v1/users/register

export { app };
