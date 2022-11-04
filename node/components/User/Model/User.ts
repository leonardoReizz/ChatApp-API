import { model, Schema } from "mongoose";

export type UserProps = {
    _id: string;
    fullName: string;
    email: string;
    password: string;
};


export const UserSchemaProps = new Schema<Omit<UserProps, '_id'>>({
    fullName: String,
    email: String,
    password: String,
});

export const DBUSER = model<Omit<UserProps, '_id'>>('user', UserSchemaProps, 'user');