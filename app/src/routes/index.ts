import express, { Request, Response } from "express";
import { router as userRouter } from "./userRoutes";

export const routes = (app: express.Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "funcionou 123 123 123 joao e madu" });
  });
  app.use(express.json(), userRouter);
};
