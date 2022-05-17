import { Router } from "express";
import userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { createUserSchema, userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(createUserSchema),
  userController.signUp
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.signIn
);

export default userRouter;