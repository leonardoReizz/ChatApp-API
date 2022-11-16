import { Request, Response } from 'express';
import ListMyFriendsUseCase from "./ListMyFriendsUseCase";

class ListMyFriendsController {
  constructor(private listMyFriendsUseCase: ListMyFriendsUseCase) {}

  async handle(req: Request, res: Response) {
    const { userId } = req.params;
    const { authorization } = req.headers;

    try {
      const list = this.listMyFriendsUseCase.execute({userId, authorization});
    } catch (error) {
      return res.status(400).json({msg: error.message});
    }
  }
}

export default ListMyFriendsController;