import { IDefaultResult } from "../../../../types/IDefaultResult";
import { FriendProps } from "../../Model/Friend";
import { IFriendRepository } from "../IFriendRepository";
import { ListFriends } from "../types";


class FriendRepositoryInMemory implements IFriendRepository {
  public friends: FriendProps[] = [];
  
  async listMyFriends(data: ListFriends): Promise<IDefaultResult> {
    const list = this.friends.filter((friend) => friend.idUserOne === data.idUser || friend.idUserTwo === data.idUser);
      return {
        status: 200,
        data: {
          msg: list,
        }
      }

  }
}

export default FriendRepositoryInMemory;