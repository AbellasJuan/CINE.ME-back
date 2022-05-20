import reviewRepository, { CreateReview } from "../repositories/reviewRepository.js";

async function insertReview(createReview: CreateReview) {
  await reviewRepository.insert(createReview);
};

export default {
    insertReview
}