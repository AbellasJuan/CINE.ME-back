import followersRepository from "../repositories/followersRepository.js";

async function getManyById(id: number) {
  return followersRepository.getManyById(id);
}

export default {
  getManyById
};
