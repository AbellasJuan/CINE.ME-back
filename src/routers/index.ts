import { Router } from "express";
import followersRouter from "./followersRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(authRouter);
router.use(followersRouter);
router.use(userRouter)

export default router;