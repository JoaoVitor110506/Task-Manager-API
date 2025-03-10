import { Router } from "express";
import { userControllers } from "../controllers/usercontrollers";

export const userRoutes = Router();

userRoutes.get("/user", userControllers.read);