import FriendRepository from "../../Repositories/FriendRepository";
import { IListMyFriendsRequestDTO } from "./IListFriendsRequestDTO";
import verifyTokenById from "../../../../authorization/verifyTokenById";

class ListMyFriendsUseCase {
  constructor(private friendRepository: FriendRepository) {}

  async execute(data: IListMyFriendsRequestDTO) {

    if(!data.userId)
      throw new Error('Invalid userId');
    if(!verifyTokenById(data.userId, data.authorization))
      throw new Error('Unauthorized');

    return await this.friendRepository.listMyFriends(data);
  }
}

export default ListMyFriendsUseCase;

