import UserRepository from "../../Repositories/UserRepository";
import { IRegisterUseRequestDTO } from "./IRegisterUserRequestDTO";

class RegisterUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(user: IRegisterUseRequestDTO) {
        if(!user.email)
            throw new Error('Invalid email');
        if(!user.fullName)
            throw new Error('Invalid fullName');
        if(!user.password)
            throw new Error('Invalid password');
        if(user.password.length < 8)
            throw new Error('Password must be at least 8 characters long');
        if(user.password.length > 32 )
            throw new Error('Password must havea maximum of 8 characters ');

        return this.userRepository.register(user);
    }
}


export default RegisterUserUseCase;