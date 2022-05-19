import { Router } from "express";
import authController from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { createUserSchema, userSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validateSchemaMiddleware(createUserSchema),
  authController.signUp
);

authRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  authController.signIn
);

export default authRouter;