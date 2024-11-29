import { Router } from "express";
import registerUser from "../controllers/user.controller";

const roter = Router();

roter.route("/register").post(registerUser);
 
export default roter;
