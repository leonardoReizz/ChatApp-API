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
		this.users.push(user)

		
			return {
				status: 200,
				data: {
					msg: this.users,
				}
			}
	}

	async findByEmail(email: string): Promise<IDefaultResult> {
		const find = this.users.filter((user) => user.email === email);

		return {
			status: 200,
			data: {
				msg: find,
			}
		}
	}
}


export default UserRepositoryInMemory;