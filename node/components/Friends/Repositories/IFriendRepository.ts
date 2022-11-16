import { IDefaultResult } from "../../../types/IDefaultResult";
import { ListFriends } from "./types";

export interface IFriendRepository {
  listMyFriends(data: ListFriends): Promise<IDefaultResult>;
}