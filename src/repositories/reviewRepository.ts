import { Review } from "@prisma/client";
import { prisma } from "../database.js";

export type CreateReview = Omit<Review, "id">;

async function insert(createReview: CreateReview) {
  return prisma.review.create({
    data: createReview,
  });
};

export default {
  insert
};
