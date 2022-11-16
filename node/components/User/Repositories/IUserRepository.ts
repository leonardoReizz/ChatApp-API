import { IDefaultResult } from "../../../types/IDefaultResult";
import {User} from "./types";

export interface IUserRespository {
    login(user: any): Promise<IDefaultResult>;
    register(user: User): Promise<IDefaultResult>;
    getUserByEmail(email: string): Promise<IDefaultResult>;
    getUserById(userId: string): Promise<IDefaultResult>;
}