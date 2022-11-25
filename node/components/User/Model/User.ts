import { model, Schema } from "mongoose";

export type UserProps = {
	_id: string;
	fullName: string;
	email: string;
	password: string;
	imageProfile: string;
};

export const UserSchemaProps = new Schema<Omit<UserProps, '_id'>>(
	{
		fullName: String,
		email: String,
		password: String,
		imageProfile: String,
	},
	{
		timestamps: true
	}
);

export const DBUSER = model<Omit<UserProps, '_id'>>('user', UserSchemaProps, 'user');