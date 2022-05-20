import { Request, Response } from "express";
import reviewService from "../services/reviewService.js";

async function postReview(req: Request, res: Response) {
  const data = req.body;
  console.log(data)
  await reviewService.insertReview(data);
  res.sendStatus(201);
};

export default {
    postReview
}