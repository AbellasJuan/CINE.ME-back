import userRepository from "../repositories/userRepository.js";
import {
  notFoundError
} from "../utils/errorUtils.js";

async function findById(id: number){
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");
  return user;
}

async function findAll(){
  const users = await userRepository.findAll();
  return users;
}

async function findByEmail(email: string){
  const users = await userRepository.findByEmail(email);
  return users;
}

async function findByUserName(userName: string){
  const users = await userRepository.findByUserName(userName);
  console.log(userName, 'passou')
  return users;
}

export default {
  findById,
  findAll,
  findByEmail,
  findByUserName
};