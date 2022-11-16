import {IDefaultResult} from "../../../types/IDefaultResult";
import {FriendRequestProps} from "../Model/FriendRequest";

export interface IFriendRequestRepository {
  create(data: Omit<FriendRequestProps, '_id'>): Promise<IDefaultResult>;
  list(userId: string): Promise<IDefaultResult>;
}