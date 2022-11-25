import MessageRepository from "../../Repositories/MessageRepository";
import {IListMessagesRequestDTO} from "./IListMessagesRequestDTO";

class ListMessagesUseCase {
  constructor(private messageRepository: MessageRepository){}

  async execute(data: IListMessagesRequestDTO){
    if(!data.idUser)
        throw new Error('Invalid idUser');
    if(!data.idUserFriend)
        throw new Error('Invalid idUserFriend');
    return await this.messageRepository.listMessages(data);
  }
}

export default ListMessagesUseCase;