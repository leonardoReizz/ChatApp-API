import UserRepository from "../../Repositories/UserRepository";
import { ILoginUserRequestDTO } from "./ILoginUserRequestDTO";

class LoginUserUseCase {
    constructor(private userRepository: UserRepository){}

    async execute(user: ILoginUserRequestDTO) {
        
        if(!user.email) 
            throw new Error('Invalid email');
        if(!user.password)
            throw new Error('Invalid password');

        return await this.userRepository.login(user);
        
    }
}

export default LoginUserUseCase;