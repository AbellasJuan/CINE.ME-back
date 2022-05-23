import { Request, Response } from "express";
import userService from "../services/userService.js";

async function getAllUsers(req: Request, res: Response) {
  const user = await userService.findAll();
  res.send(user).status(200);
};

async function getUserById(req: Request, res: Response) {
  const {id} = req.params;
  const user = await userService.findById(Number(id));
  res.send(user).status(200);
};

async function getUserByUserName(req: Request, res: Response) {
  const { userName } = req.query;

  const users = await userService.findAllByUserName(String(userName));
  res.send(users).status(200);
};

export default {
  getAllUsers,
  getUserById,
  getUserByUserName
};