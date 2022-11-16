import {IGetUserByIdRequestDTO} from "./IGetUserByIdRequestDTO";
import UserRepository from "../../Repositories/UserRepository";

class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: IGetUserByIdRequestDTO) {
    if(!data.userId)
      throw new Error('Invalid userId')

    return this.userRepository.getUserById(data.userId);
  }
}

export default GetUserByIdUseCase;