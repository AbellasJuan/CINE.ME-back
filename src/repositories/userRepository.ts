import { prisma } from "../database.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

async function findByUserName(userName: string) {
  return prisma.user.findUnique({
    where: {
      userName,
    },
  });
};

async function findAllByUserName(userName: string) {
  return prisma.user.findMany({
    
    where: {
      email: {
        contains: userName
      }
    },
    select: {
      id: true,
      userName: true,
  },
  });
};

async function findAll(){
  return prisma.user.findMany();
}

export default {
  findByEmail,
  findById,
  findByUserName,
  findAll,
  findAllByUserName
};