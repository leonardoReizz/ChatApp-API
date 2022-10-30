import { IDefaultResult } from "../../../types/IDefaultResult";

export interface IUserRespository {
    login(user: any): Promise<IDefaultResult>;
    register(user: any): Promise<IDefaultResult>;
}