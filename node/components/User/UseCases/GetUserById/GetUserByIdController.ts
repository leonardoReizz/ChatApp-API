import { Request, Response } from 'express';
import GetUserByIdUseCase from "./GetUserByIdUseCase";

class GetUserByIdController {
  constructor(private getUserByIdUsecase: GetUserByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const result = await this.getUserByIdUsecase.execute({userId});

      return res.status(result.status).json(result.data);
    } catch (error) {
      return res.status(400).json({msg: error.message});
    }
  }
}

export default GetUserByIdController