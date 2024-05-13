import express from "express";
import { UserController } from "../controllers/UserController";

export const router = express.Router();

router.get("/user", UserController.findAllUsers);
