import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware order matters!

// CORS setup (allow frontend to access backend)
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Parse incoming JSON and form data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));

// Serve static files (like images, CSS, JS)
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

export default app;
