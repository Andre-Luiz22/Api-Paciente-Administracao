import { Request, Response } from "express";
import { user } from "../model/UserModel";
import bcrypt from "bcrypt";

const saltRounds = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
const salt = bcrypt.genSaltSync(saltRounds);

interface IUser {
  _id: string;
  nick: string;
  email: string;
  password: string;
}

type IuserToSend = Omit<IUser, "password">

type TSignInUser = Omit<IUser, "_id" | "nick">;

export class UserController {
  static findAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await user.find();
      res.status(200).json(allUsers);
    } catch (err) {}
  };

  static getUserByEmail = async (req: Request, res: Response) => {
    const emailUser = req.params.email;
    try {
      const returnedUser = await user.find({ email: emailUser });
      if (returnedUser.length === 0) {
        throw {
          error: "u202",
          message: "Usuário não encontrado"
        };
      }
      res.status(200).json(returnedUser);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  static createUser = async (req: Request, res: Response) => {
    try {
      const { email, nick, password }: IUser = req.body;
      const cryptoPassword = bcrypt.hashSync(password.trim(), salt);

      const thisEmailExists = await user.find({ email });
      if (thisEmailExists.length === 1) {
        throw {
          error: "u203",
          message: "Email já cadastrado"
        };
      }
      if (thisEmailExists.length > 1) {
        throw {
          error: "u204",
          message: "Erro crítico, esse email já foi cadastrado duas vezes."
        }
      }

      const newUser = {
        nick: nick.trim(),
        email: email.trim(),
        password: cryptoPassword,
      };

      await user.create(newUser);

      const bdData: Array<IUser> = await user.find({ email });

      const { _id, nick: toSendNick, email: toSendEmail } = bdData[0];

      const userToSend = { _id, nick: toSendNick, email: toSendEmail };

      res.status(200).json({ token: "token vem aqui", user: userToSend });
    } catch (err) {
      res.status(500).json(err);
    }
  }; 
}
