import {IFriendRequestRepository} from "./IFriendRequestRepository";
import {DBFRIENDREQUEST, FriendRequestProps} from "../Model/FriendRequest";
import {IDefaultResult} from "../../../types/IDefaultResult";

class FriendRequestRepository implements IFriendRequestRepository {
  async create(data: Omit<FriendRequestProps, '_id'>): Promise<IDefaultResult> {
    const dbCreate = await DBFRIENDREQUEST.create(data)
    return await dbCreate.save()
      .then((result) => {
        return {
          status: 200,
          data: {
            msg: result
          }
        }
      })
      .catch((error) => {
        console.log(error, ' ERROR CREATE FRIEND REQUEST');
        return {
          status: 500,
          data: {
            msg: 'Internal error',
          }
        }
      })
  }

  async list(userId: string): Promise<IDefaultResult> {
    return await DBFRIENDREQUEST.find({idUserSend: userId})
      .then((result) => {
        return {
          status: 200,
          data: {
            msg: result,
          }
        }
      })
      .catch((error) => {
        console.log(error, ' ERROR LIST MY FRIENDS REQUEST');
        return {
          status: 500,
          data: {
            msg: 'Internal error',
          }
        }
      })
  }
}

export default FriendRequestRepository;