import { Request, Response } from "express";
import ListFriendsUseCase from "./ListMyFriendsUseCase";

class ListMyFriendsController {
  constructor(private listFriendUseCase: ListFriendsUseCase){}

  async handle(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = req.params.userId;

    try {
      const list = await this.listFriendUseCase.execute({userId, authorization});

      return res.status(list.status).json(list.data);
    } catch (error) {
      return res.status(400).json({msg: error.message});
    }
  }
}

export default ListMyFriendsController;