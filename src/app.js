import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//whenever we are using middleware we are using app.use.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//get data from form
app.use(express.json({ limit: "16kb" }));

//get data from url
app.use(express.urlencoded({ limit: "16kb" }));

//public folder
app.use(express.static("public"));

//allow us to do some secure CRUD operations
app.use(cookieParser());
export default app;
