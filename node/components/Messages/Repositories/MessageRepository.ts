import { IMessageRepository } from "./IMessageRepository";
import { IDefaultResult } from "../../../types/IDefaultResult";
import { DBMESSAGES } from "../Model/Message";
import * as types from './types';


class MessageRepository implements IMessageRepository {
  async create(): Promise<IDefaultResult> {
    return {
      status: 200,
      data: {
        msg: ''
      },
    }
  }

  async sendMessage(data: types.CreateMessage): Promise<IDefaultResult> {
    const create = await DBMESSAGES.create(data);
    return await create.save()
      .then((result) => {
        return {
          status: 200,
          data: {
            msg: result,
          },
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

  async listMessages(data: types.ListMessages): Promise<IDefaultResult> {
    return DBMESSAGES.find({
      $or: [
        {
          idUserSend: data.idUser, idUserReceive: data.idUserFriend
        },
        {
          idUserSend: data.idUserFriend, idUserReceive: data.idUser
        }
      ]
    } )
      .then((result) => {
        console.log(result);
        return {
          status: 200,
          data: {
            msg: result,
          }
        }
      })
      .catch((error) => {
        console.log(error, ' ERROR LIST MESSAGES');
        return {
          status: 500,
          data: {
            msg: 'Internal error',
          }
        }
      })
  }



}

export default MessageRepository;