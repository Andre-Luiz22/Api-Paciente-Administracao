import { Request, Response } from "express";
import { unit } from "../model/UnitModel";

export class UnitController {
    static createUnit = async (req: Request, res: Response) => {
        try {
            const newUnit = req.body;
            await unit.create(newUnit);
            res.status(200).json({"menssager":"Unidade criada!"});
          } catch(err) {
      
          }
    }

    static getUnitByModuleId = async (req: Request, res: Response) => {

        const idModule = req.params.idModule;
        try {
            const returnedUnits = await unit.find({idModule : idModule})
            if (returnedUnits.length === 0) {
                throw "Unidades não encontradas";
            }
            res.status(200).json(returnedUnits);
        }catch(err){
            res.status(500).json({message : err});
        }
    }


}