import { Request, Response } from "express"
import followersService from "../services/followersService.js";

async function getManyById(req: Request, res: Response){
    const { id } = req.params;

    const followers = await followersService.getManyById(Number(id));

    res.send(followers);
}

export default {
    getManyById
}