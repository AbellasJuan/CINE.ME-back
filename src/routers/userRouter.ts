import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);

export default userRouter;