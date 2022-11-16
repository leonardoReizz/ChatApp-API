import CreateFriendRequestUseCase from './CreateFriendRequestUseCase';
import { Request, Response } from 'express';
import {ICreateFriendRequestRequestDTO} from "./ICreateFriendRequestRequestDTO";
import jwt from "jsonwebtoken";

class CreateFriendRequestController {
  constructor(private createFriendRequestUseCase: CreateFriendRequestUseCase) {}

  async handle(req: Request, res: Response) {
    const data: ICreateFriendRequestRequestDTO = req.body;
    const { authorization } = req.headers;

    try {
      const create = await this.createFriendRequestUseCase.execute({...data, authorization});
      return res.status(create.status).json({msg: create.data});
    } catch (error) {
      return res.status(400).json({msg: error.message});
    }
  }
}

export default CreateFriendRequestController;