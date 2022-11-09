import getError from "../../../../utils/Erros/getError";
import UserRepositoryInMemory from "../../Repositories/in-memory/UserRepositoryInMemory";
import RegisterUserUseCase from "../RegisterUser/RegisterUserUseCase";
import FindUserByEmailUseCase from "./FindUserByEmailUseCase";

describe('Find User By Email Use Case', () => {
  let userRepository: UserRepositoryInMemory;
  let findUserByEmailUseCase: FindUserByEmailUseCase;
  let registerUserUseCase: RegisterUserUseCase;  
  
  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
    findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
    registerUserUseCase = new RegisterUserUseCase(userRepository);

    registerUserUseCase.execute({
      fullName: 'User test',
	    email: 'usertest@gmail.com',
	    password: 'user@123'
    })
  });

  it('should not be able to find user by email -> Invalid email', async() => {
    const find: Error = await getError(async () => 
      await findUserByEmailUseCase.execute('')
    );

    expect(find).toBeInstanceOf(Error)
    expect(find.message).toEqual('Invalid email');
  });

  it('should be able to find user by email', async() => {
    const find = await findUserByEmailUseCase.execute('test@gmail.com');

    expect(find.status).toEqual(200);
  });
});