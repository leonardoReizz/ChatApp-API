import { model, Schema } from "mongoose";

export type FriendProps = {
  _id: string;
  idUserOne: string;
  idUserTwo: string;
}

export const FriendSchemaProps = new Schema<Omit<FriendProps, '_id'>>(
  {
    idUserOne: String,
    idUserTwo: String,
  },
  {
    timestamps: true
  }
)

export const DBFRIEND = model<Omit<FriendProps, '_id'>>('friend', FriendSchemaProps, 'friend');