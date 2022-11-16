import { model, Schema } from 'mongoose';

export type FriendRequestProps = {
  _id: string,
  idUserSend: string,
  idUserReceive: string,
}

export const FriendRequestSchemaProps = new Schema<Omit<FriendRequestProps, '_id'>>({
  idUserSend: String,
  idUserReceive: String,
},{
  timestamps: true
})

export const DBFRIENDREQUEST = model<Omit<FriendRequestProps, '_id'>>('friendRequest', FriendRequestSchemaProps, 'friendRequest');