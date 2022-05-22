import { Request, Response } from "express";
import reviewService from "../services/reviewService.js";

async function postReview(req: Request, res: Response) {
  const data = req.body;
  await reviewService.insertReview(data);
  res.sendStatus(201);
};

async function getAllReviews(req: Request, res: Response) {
  const reviews = await reviewService.getAll();
  res.send(reviews).status(200);
};

async function getReviewsById(req: Request, res: Response) {
  const { id } = req.params;
  const reviews = await reviewService.getById(Number(id));
  res.send(reviews).status(200);
};

export default {
    postReview,
    getAllReviews,
    getReviewsById
};