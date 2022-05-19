import { Request, Response } from "express";
import userService from "../services/userService.js";

async function getAllUsers(req: Request, res: Response) {
  const user = await userService.findAll();
  res.send(user).status(200);
};

export default {
  getAllUsers
};