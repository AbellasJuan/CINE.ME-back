import { Router } from "express";
import followersRouter from "./followersRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(userRouter);
router.use(followersRouter);

export default router;