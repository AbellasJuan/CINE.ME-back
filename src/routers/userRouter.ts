import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);
userRouter.get("/user/:id", userController.getUserById);

export default userRouter;