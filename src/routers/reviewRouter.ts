import { Router } from "express";
import reviewController from "../controllers/reviewController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { createReviewSchema } from "../schemas/reviewSchema.js";

const reviewsRouter = Router();

reviewsRouter.post("/reviews", ensureAuthenticatedMiddleware, validateSchemaMiddleware(createReviewSchema), reviewController.postReview);

export default reviewsRouter;