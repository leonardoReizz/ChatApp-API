import { Request, Response } from 'express';
import ListMessagesUseCase from "./ListMessagesUseCase";

class ListMessagesController {
  constructor(private listMessagesUseCase: ListMessagesUseCase) {}

  async handle(req: Request, res: Response) {
    const { idUser, idUserFriend } = req.params;

    try {
      const list = await this.listMessagesUseCase.execute({idUser, idUserFriend});

      return res.status(list.status).json(list.data);
    } catch (error) {
      return res.status(400).json({msg: error.message});
    }
  }
}

export default ListMessagesController;