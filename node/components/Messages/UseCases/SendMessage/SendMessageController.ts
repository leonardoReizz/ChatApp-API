import { Request, Response } from 'express';
import SendMessageUseCase from "./SendMessageUseCase";
import {ISendMessageRequestDTO} from "./ISendMessageRequestDTO";

class SendMessageController {
  constructor(private sendMessageUseCase: SendMessageUseCase) {}

  async handle(req: Request, res: Response) {
    const data: ISendMessageRequestDTO = req.body;

    try{
      const sendMessage = await this.sendMessageUseCase.execute(data);

      return res.status(sendMessage.status).json(sendMessage.data);
    } catch (error){
      return res.status(400).json({msg: error.message});
    }
  }
}

export default SendMessageController;