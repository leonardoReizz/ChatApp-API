import { IFriendRepository } from "./IFriendRepository";
import { IDefaultResult } from '../../../types/IDefaultResult';
import { DBFRIEND } from "../Model/Friend";
import { ListFriends } from "./types";

class FriendRepository implements IFriendRepository {
  async listMyFriends(data: ListFriends): Promise<IDefaultResult> {
    const list = await DBFRIEND.find({$or:[{idUserOne: data.userId},{ idUserTwo: data.userId}]})
    .then((result) => {
      return {
        status: 200,
        data: {
          msg: result,
        }
      }
    })
    .catch((error) => {
      console.log(error, ' ERROR LIST FRIENDS');
      return {
        status: 500,
        data: {
          msg: 'Internal error'
        }
      }
    })
    return list;
  }
}

export default FriendRepository;