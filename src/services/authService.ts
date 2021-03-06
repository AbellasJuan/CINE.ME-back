import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
import userRepository from "../repositories/userRepository.js";
import {
  conflictError,
  unauthorizedError,
} from "../utils/errorUtils.js";

export type CreateUserData = Omit<User, "id">;

async function signUp(createUserData: CreateUserData) {
  const existingUserEmail = await userRepository.findByEmail(createUserData.email);
  const existingUserUserName = await userRepository.findByUserName(createUserData.userName);
  if (existingUserEmail) throw conflictError("Email must be unique");
  if (existingUserUserName) throw conflictError("UserName must be unique");
  const hashedPassword = bcrypt.hashSync(createUserData.password, 12);
  await authRepository.insert({ ...createUserData, password: hashedPassword });
};

async function signIn(loginData: CreateUserData) {
  const user = await getUserOrFail(loginData);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
};

async function getUserOrFail(loginData: CreateUserData) {
  const user = await userRepository.findByEmail(loginData.email);
  if (!user) throw unauthorizedError("Invalid credentials");
  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");
  return user;
};

export default {
  signUp,
  signIn
};