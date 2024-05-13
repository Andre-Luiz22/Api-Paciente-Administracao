import express, { Request, Response } from "express";
import { routes } from "./routes";
import { db } from "../config/dbConnect";

export const app = express();
app.use(express.json());
routes(app);

db.on("error", () => console.log("erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));
