import UserRepository from "../../Repositories/UserRepository";

class GetUserByEmailUseCase {
  constructor(private userRepository: UserRepository){};

  async execute(email: string){
    if(!email)
      throw new Error('Invalid email');
      
    return await this.userRepository.getUserByEmail(email);
  } 
}

export default GetUserByEmailUseCase;