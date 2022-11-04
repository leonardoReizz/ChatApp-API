import { IDefaultResult } from "../../../types/IDefaultResult";
import { DBUSER } from "../Model/User";
import { IUserRespository } from "./IUserRepository";
import md5 from 'md5';


class UserRepository implements IUserRespository {
	async login(user: any): Promise<IDefaultResult> {
		const login = DBUSER.findOne({ email: user.email, password: user.password })
			.then((result) => {
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
		const createUser = new DBUSER(user);
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

	async findByEmail(email: string): Promise<IDefaultResult> {
		const find = DBUSER.find({email: email})
			.then((result) => {
				return {
					status: 200,
					data: {
						msg: result
					}
				}
			})
			.catch((error) => {
				console.log(error, ' ERROR DB FIND USER BY EMAIL')
				return {
					status: 500,
					data: {
						msg: 'Internal Error'
					}
				}
			})

		return find;
	}
}


export default UserRepository;