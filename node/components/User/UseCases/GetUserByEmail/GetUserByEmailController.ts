import { Request, Response } from "express";
import GetUserByEmailUseCase from "./GetUserByEmailUseCase";

class GetUserByEmailController {
  constructor(private findUserByEmailUseCase: GetUserByEmailUseCase){}

  async handle(req: Request, res: Response) {
    const email = req.params.email;

    try {
      const find = await this.findUserByEmailUseCase.execute(email);
      return res.status(find.status).json(find.data);
    } catch (error) {
      return res.status(400).json({msg: error.message})
    }
  }
}

export default GetUserByEmailController;