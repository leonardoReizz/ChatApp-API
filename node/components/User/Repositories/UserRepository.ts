import { IDefaultResult } from "../../../types/IDefaultResult";
import { DBUSER } from "../Model/User";
import { IUserRespository } from "./IUserRepository";
import {User} from "./types";


class UserRepository implements IUserRespository {
	async login(user: any): Promise<IDefaultResult> {
		const login = DBUSER.findOne({ email: user.email, password: user.password })
			.select('-password')
			.then((result: any) => {
				console.log(result);
				return {
					status: 200,
					data: {
						msg: result?._doc
					}
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

	async register(user: User): Promise<IDefaultResult> {
		const createUser = new DBUSER(user);
		const create = createUser.save()
			.then((result: any) => {
				return {
					status: 200,
					data: {
						msg: result
					}
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

	async getUserByEmail(email: string): Promise<IDefaultResult> {
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

	async getUserById(userId: string): Promise<IDefaultResult> {
		return await DBUSER.find({_id: userId})
			.then((result) => {
				return {
					status: 200,
					data: {
						msg: result
					}
				}
			})
			.catch((error) => {
				console.log(error, ' ERROR DB FIND USER BY ID');
				return {
					status: 500,
					data: {
						msg: 'Internal Error'
					}
				}
			})
	}
}


export default UserRepository;