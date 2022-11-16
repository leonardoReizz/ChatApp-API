import FriendRequestRepository from "../../Repositories/FriendRequestRepository";
import {IListMyFriendsRequestDTO} from "./IListMyFriendsRequestDTO";
import verifyTokenById from "../../../../authorization/verifyTokenById";

class ListMyFriendsUseCase {
  constructor(private friendRequestRepository: FriendRequestRepository) {}

  async execute(data: IListMyFriendsRequestDTO){
    if(!data.userId)
      throw new Error('Invalid userId');
    if(!verifyTokenById(data.userId, data.authorization))
      throw new Error('Unauthorized');

    return this.friendRequestRepository.list(data.userId);
  }
}

export default ListMyFriendsUseCase;