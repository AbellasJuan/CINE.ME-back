import { Router } from "express";
import followersRouter from "./followersRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import reviewsRouter from "./reviewRouter.js";

const router = Router();
router.use(authRouter);
router.use(followersRouter);
router.use(userRouter)
router.use(reviewsRouter)

export default router;