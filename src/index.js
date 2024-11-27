import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

/*
import express from "express";
const app = express();
//using IIFE(run as soon as defined)
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is lishtening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();
*/
