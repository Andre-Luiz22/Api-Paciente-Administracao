import express from "express";
import { ModuleController } from "../controllers/ModuleController";

export const router = express.Router();

router.get("/module/:idCourse", ModuleController.getModuleByCourseId)
.post("/module", ModuleController.createModule)