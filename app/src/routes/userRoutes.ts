import express from "express";
import { UserController } from "../controllers/UserController";

export const router = express.Router();

router.get("/user", UserController.findAllUsers)
.get("/user/:email", UserController.getUserByEmail)
.post("/user", UserController.createUser);

