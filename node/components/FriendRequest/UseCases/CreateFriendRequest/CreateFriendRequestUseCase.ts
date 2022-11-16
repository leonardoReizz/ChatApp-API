import {ICreateFriendRequestRequestDTO} from "./ICreateFriendRequestRequestDTO";
import FriendRequestRepository from "../../Repositories/FriendRequestRepository";
import verifyTokenById from "../../../../authorization/verifyTokenById";

class CreateFriendRequestUseCase {
  constructor(private friendRequestRepository: FriendRequestRepository){}
  async execute(data: ICreateFriendRequestRequestDTO) {
    if(!data.idUserReceive)
        throw new Error('Invalid idUserReceive');
    if(!data.idUserSend)
        throw new Error('Invalid idUserSend');

    if(!verifyTokenById(data.idUserSend, data.authorization))
        throw new Error('Unauthorized');

    return this.friendRequestRepository.create(data);
  }
}

export default CreateFriendRequestUseCase;