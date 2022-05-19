import userRepository from "../repositories/userRepository.js";
import {
  notFoundError
} from "../utils/errorUtils.js";

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
};

async function findAll(){
  const users = await userRepository.findAll();
  return users;
}

export default {
  findById,
  findAll
};