import "./setup.js";
import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import router from "./routers/index.js";

const app = express();
app.use(json());
  app.use(
    cors({
      origin: "https://seu-dominio.com",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
