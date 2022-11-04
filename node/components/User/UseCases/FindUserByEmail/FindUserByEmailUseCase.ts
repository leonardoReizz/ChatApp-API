import UserRepository from "../../Repositories/UserRepository";

class FindUserByEmailUseCase {
  constructor(private userRepository: UserRepository){};

  async execute(email: string){
    if(!email)
      throw new Error('Invalid email');
      
    return await this.userRepository.findByEmail(email);
  } 
}

export default FindUserByEmailUseCase;