import md5 from "md5";
import jwt from "jsonwebtoken";
import UserRepository from "../../Repositories/UserRepository";
import { ILoginUserRequestDTO } from "./ILoginUserRequestDTO";

class LoginUserUseCase {
	constructor(private userRepository: UserRepository) { }

	async execute(user: ILoginUserRequestDTO) {

		if (!user.email)
			throw new Error('Invalid email');
		if (!user.password)
			throw new Error('Invalid password');

		const login = await this.userRepository.login({...user, password: md5(user.password)});

		if (login.data.msg === undefined)
			throw new Error('Invalid email or password');

		const secret = process.env.SECRET as string;
		const token = jwt.sign(
			{
				id: login.data.msg._id
			},
			secret,
		)
		return {
			status: login.status,
			data: {
				msg: {
					...login.data.msg,
					token
				}
			}
		};
	}
}

export default LoginUserUseCase;