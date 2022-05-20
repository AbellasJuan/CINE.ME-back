import Joi from "joi";
import { CreateReview } from "../repositories/reviewRepository.js";

export const createReviewSchema = Joi.object<CreateReview>({
  userId: Joi.number().required(),
  movieId: Joi.string().required(),
  comment: Joi.string().required(),
  grade: Joi.number().valid(1, 2, 3, 4, 5).required()
}); 