import express, { Request, Response } from "express";
import { routes } from "./routes";
import { db } from "../config/dbConnect";
import cors from "cors";

const options: cors.CorsOptions = {
  origin: "*",
  methods: "GET, POST, PATCH",
};
export const app = express();
app.use(express.json());

app.use(cors(options));
routes(app);

db.on("error", () => console.log("erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));
