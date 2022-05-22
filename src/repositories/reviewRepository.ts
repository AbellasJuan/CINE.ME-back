import { Review } from "@prisma/client";
import { prisma } from "../database.js";

export type CreateReview = Omit<Review, "id">;

async function insert(createReview: CreateReview) {
  return prisma.review.create({
    data: createReview,
  });
};

async function getAll(){
  const reviews = prisma.review.findMany();
  return reviews;
};

async function getById(id: number){
  const reviews = prisma.review.findMany({
    where: {
		 userId: id
		}
  });
  return reviews;
};

export default {
  insert,
  getAll,
  getById
};