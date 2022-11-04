import md5 from "md5";
import UserRepository from "../../Repositories/UserRepository";
import { IRegisterUseRequestDTO } from "./IRegisterUserRequestDTO";

class RegisterUserUseCase {
	constructor(private userRepository: UserRepository) { }

	async execute(user: IRegisterUseRequestDTO) {
		if (!user.email)
			throw new Error('Invalid email');
		if (!user.fullName)
			throw new Error('Invalid fullName');
		if (!user.password)
			throw new Error('Invalid password');
		if (user.password.length < 8)
			throw new Error('Password must be at least 8 characters long');
		if (user.password.length > 32)
			throw new Error('Password must have a maximum of 32 characters');

		const findEmail = await this.userRepository.findByEmail(user.email);
		if(findEmail.data.msg?.length > 0)
			throw new Error('Email already exist');

		return await this.userRepository.register({...user, password: md5(user.password)});
	}
}


export default RegisterUserUseCase;