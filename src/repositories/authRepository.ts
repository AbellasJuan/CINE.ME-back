import { prisma } from "../database.js";
import { CreateUserData } from "../services/authService.js";

async function insert(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
};

export default {
  insert
};