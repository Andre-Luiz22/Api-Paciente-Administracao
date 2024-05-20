import { Request, Response } from "express";
import { module } from "../model/ModuleModel";
import { log } from "console";
import { builtinModules } from "module";

export class ModuleController {
    static getModuleByCourseId = async (req: Request, res: Response) => {
        const idCourse = req.params.idCourse;
        try {
            const returnedModules = await module.find({ idCourse: idCourse });
            if (returnedModules.length === 0) {
                throw "Módulos não encontrados";
            }
            res.status(200).json(returnedModules);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    };

    static createModule = async (req: Request, res: Response) => {
      try {
        const newModule = req.body;
        await module.create(newModule);
        res.status(200).json({"message":"Módulo criado!"});
      } catch(err) {
  
      }
    }
}
