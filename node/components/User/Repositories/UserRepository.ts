import { IDefaultResult } from "../../../types/IDefaultResult";
import { IUserRespository } from "./IUserRepository";

class UserRepository implements IUserRespository {
    async login(user: any): Promise<IDefaultResult> {

        
    }

    async register(user: any): Promise<IDefaultResult> {

    }
}


export default UserRepository;