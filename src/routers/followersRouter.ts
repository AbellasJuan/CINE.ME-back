import { Router } from "express";
import followersController from "../controllers/followersController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const followersRouter = Router();

followersRouter.get("/followers/:id", ensureAuthenticatedMiddleware, followersController.getManyById);

export default followersRouter;