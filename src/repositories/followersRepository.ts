import { prisma } from "../database.js";

async function getManyById(id: number) {
  return prisma.followers.findMany({
    where: { userId: id },
  });
}

export default {
  getManyById
};
