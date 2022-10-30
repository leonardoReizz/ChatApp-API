import { IDefaultResult } from "../../../types/IDefaultResult";
import { DBUSER } from "../Model/User";
import { IUserRespository } from "./IUserRepository";
import md5 from 'md5';


class UserRepository implements IUserRespository {
    async login(user: any): Promise<IDefaultResult> {
        const login = DBUSER.findOne({email: user.email, password: user.password})
        .then((result) =>  {
            return {
                status: 200,
                data: {
                    msg: result,
                },
            }
        })
        .catch((err) => {
            console.log(err, ' ERROR DB LOGIN USER');
            return {
                status: 500,
                data: {
                    msg: 'Internal Error',
                },
            }
        })
        return login;
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


export default UserRepository;