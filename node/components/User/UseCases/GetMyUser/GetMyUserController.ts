import GetMyUserUseCase from "./GetMyUserUseCase";
import { Request, Response } from 'express';

class GetMyUserController {
  constructor(private getMyUserUseCase: GetMyUserUseCase){}

  async handle(req: Request, res: Response){
    const userId = req.params.userId;
    const authorization = req.headers.authorization;

    try {
      const getMyUser = await this.getMyUserUseCase.execute({userId, authorization});
      return res.status(getMyUser.status).json(getMyUser.data);
    } catch (error) {
      return res.status(200).json({msg: error.message});
    }
  }
}

export default GetMyUserController;