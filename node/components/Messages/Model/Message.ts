import { model, Schema } from "mongoose";

export type MessageProps = {
  _id: string;
  idUserSend: string;
  idUserReceive: string;
  message: string;
}

export const MessagedSchemaProps = new Schema<Omit<MessageProps, '_id'>>(
  {
    idUserSend: String,
    idUserReceive: String,
    message: String,
  },
  {
    timestamps: true
  }
)

export const DBMESSAGES = model<Omit<MessageProps, '_id'>>('messages', MessagedSchemaProps, 'messages');