import { Request, Response } from "express";
import { user } from "../model/UserModel";

export class UserController {
  static routeUser = (req: Request, res: Response) => {
    res.status(200).send("<h1>Rota de user</h1>");
  };

  static findAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await user.find();
      res.status(200).json(allUsers);
    } catch (err) {}
  };
}
