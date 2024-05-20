import express from "express";
import { UnitController } from "../controllers/UnitController";

export const router = express.Router();

router.post("/unit", UnitController.createUnit)
.get("/unit/:idModule", UnitController.getUnitByModuleId)