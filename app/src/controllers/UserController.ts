import { Request, Response } from "express";
import { user } from "../model/UserModel";
import { log } from "console";
import { builtinModules } from "module";

export class UserController {
  static routeUser = (req: Request, res: Response) => {
    res.status(200).send("<h1>Rota de user</h1>");
  };

  static findAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await user.find();
      res.status(200).json(allUsers);
    } catch (err) { }
  };

  static getUserByEmail = async (req: Request, res: Response) => {
    const emailUser = req.params.email;
    try {
      const returnedUser = await user.find({ email: emailUser });
      if (returnedUser == null) { throw "Usuário não encontrado" };
      res.status(200).json(returnedUser);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  static createUser = async (req: Request, res: Response) => {
    try {
      const newUser = req.body;
      await user.create(newUser);
      res.status(200).json({"menssager":"Usuário criado!"});
    } catch(err) {

    }
  }
}
  

