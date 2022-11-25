import MessageRepository from "../../Repositories/MessageRepository";
import {ISendMessageRequestDTO} from "./ISendMessageRequestDTO";

class SendMessageUseCase {
  constructor(private messageRepository: MessageRepository) {}

  async execute(data: ISendMessageRequestDTO){
    if(!data.idUserSend)
      throw new Error('Invalid idUserSend');
    if(!data.idUserSend)
      throw new Error('Invalid idUserReceive')
    if(!data.idUserSend)
      throw new Error('Invalid message')

    return this.messageRepository.sendMessage(data);
  }
}

export default SendMessageUseCase;