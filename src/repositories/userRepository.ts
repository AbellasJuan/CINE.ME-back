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

  console.log(userName, 'aqui')
  return prisma.user.findMany({
    
    where: {
      email: {
        contains: userName
      }
    },
    select: {
      id: true,
      userName: true,
      email: true
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
};