import reviewRepository, { CreateReview } from "../repositories/reviewRepository.js";

async function insertReview(createReview: CreateReview) {
  await reviewRepository.insert(createReview);
};

async function getAll() {
  const reviews = await reviewRepository.getAll();
  return reviews;
};

async function getById(id: number) {
  const reviews = await reviewRepository.getById(id);
  return reviews;
};

export default {
    insertReview,
    getAll,
    getById
};