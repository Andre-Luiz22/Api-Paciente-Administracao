import express, { Request, Response } from "express";
import { router as userRouter } from "./userRoutes";
import { router as moduleRouter } from "./moduleRoutes";
import {router as unitRouter} from "./unitRoutes"

export const routes = (app: express.Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "funcionou 123 123 123 joao e madu" });
  });
  app.use(express.json(), userRouter, moduleRouter, unitRouter);
};
