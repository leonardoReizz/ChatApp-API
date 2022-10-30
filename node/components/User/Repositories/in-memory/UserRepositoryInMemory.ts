import { IDefaultResult } from "../../../../types/IDefaultResult";
import { DBUSER } from "../../Model/User";
import { IUserRespository } from "./../IUserRepository";
import md5 from 'md5';


class UserRepositoryInMemory implements IUserRespository {

    private users: any[] = [];

    async login(user: any): Promise<IDefaultResult> {
        const login = this.users.some((aUser) => 
            aUser.email === user.email &&
            aUser.password === md5(user.password)    
        )
        return {
            status: 200,
            data: {
                msg: login,
            }
        };
    }

    async register(user: any): Promise<IDefaultResult> {
        const crypt = {...user, password: md5(user.password)}
        const createUser = new DBUSER(crypt);
        const create = createUser.save()
        .then((result) => {
            return {
                status: 200,
                data: {
                    msg: result,
                },
            }
        })
        .catch((err) => {
            console.log(err, ' ERROR DB REGISTER USER')
            return {
                status: 200,
                data: {
                    msg: 'Internal Error',
                },
            }
        });

        return create;
    }
}


export default UserRepositoryInMemory;