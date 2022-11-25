import { IDefaultResult } from "../../../types/IDefaultResult";
import * as types from './types';

export interface IMessageRepository {
  create(): Promise<IDefaultResult>;
  sendMessage(data: types.CreateMessage): Promise<IDefaultResult>;
  listMessages(data: types.ListMessages): Promise<IDefaultResult>;
}