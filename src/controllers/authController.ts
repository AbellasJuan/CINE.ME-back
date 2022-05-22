import { Request, Response } from "express";
import userRepository from "../repositories/userRepository.js";
import authService from "../services/authService.js";
import userService from "../services/userService.js";
import userController from "./userController.js";

async function signUp(req: Request, res: Response) {
  const user = req.body;
  await authService.signUp(user);
  res.sendStatus(201);
};

async function signIn(req: Request, res: Response) {
  const signUser = req.body; 
  const token = await authService.signIn(signUser);
  const user = await userRepository.findByEmail(signUser.email);
  const userInfos = { id: user.id, userName: user.userName, token: token};
  res.send(userInfos);
};

export default {
  signUp,
  signIn,
};