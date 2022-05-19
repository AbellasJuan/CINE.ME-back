import Joi from "joi";
import { CreateUserData } from "../services/authService.js";

export const createUserSchema = Joi.object<CreateUserData>({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
