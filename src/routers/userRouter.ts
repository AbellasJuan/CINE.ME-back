import { Router } from "express";
import userController from "../controllers/userController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const userRouter = Router();

userRouter.get("/users", ensureAuthenticatedMiddleware, userController.getAllUsers);

export default userRouter;