import UserRepository from '../../Repositories/UserRepository';
import verifyTokenById from '../../../../authorization/verifyTokenById';
import { IGetUserRequestDTO } from './IGetUserRequestDTO';

class GetMyUserUseCase {
  constructor(private userRepository: UserRepository){}

  async execute(data: IGetUserRequestDTO){
    if(!data.userId)
      throw new Error('Invalid userId');

    const find = await this.userRepository.getUserById(data.userId)
    if(find.data.msg.length === 0)
      throw new Error('User not exist');
   
    if(!verifyTokenById(data.userId, data.authorization))
      throw new Error('Unauthorized');


    return await this.userRepository.getMyUser(data.userId);
  }
}

export default GetMyUserUseCase;