import Joi from "joi";
import { CreateUserData } from "../services/authService.js";

export const createUserSchema = Joi.object<CreateUserData>({
  userName: Joi.string().required(),
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});