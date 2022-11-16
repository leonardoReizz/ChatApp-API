import getError from '../../../../utils/Erros/getError';
import UserRepositoryInMemory from '../../Repositories/in-memory/UserRepositoryInMemory';
import RegisterUserUseCase from '../RegisterUser/RegisterUserUseCase';
import LoginUserUseCase from './LoginUserUseCase';
import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../../../../.env') });


describe('Login User Use Case' ,() => {
  let userRepository: UserRepositoryInMemory;
  let loginUserUseCase:  LoginUserUseCase;
  let registerUserUseCase: RegisterUserUseCase;

  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
    loginUserUseCase = new LoginUserUseCase(userRepository);
    registerUserUseCase = new RegisterUserUseCase(userRepository);
    
    registerUserUseCase.execute({
      fullName:'User test',
      email: 'test@gmail.com',
      password: 'test@123'
    })
  });
  
  it('should not be able to login -> Invalid email', async () => {
    const login: Error = await getError(async () => 
      loginUserUseCase.execute({
        email: '',
        password: 'test@123',
      }) 
    )
    
    expect(login).toBeInstanceOf(Error);
    expect(login.message).toEqual('Invalid email');
  });

  it('should not be able to login -> Invalid password',async () => {
    const login: Error = await getError(async () => 
      loginUserUseCase.execute({
        email: 'test@gmail.com',
        password: '',
      }) 
    )
    
    expect(login).toBeInstanceOf(Error);
    expect(login.message).toEqual('Invalid password');
  });

  it('should be able to login', async () => {
    const login = await loginUserUseCase.execute({
      email: 'test@gmail.com',
      password: 'test@123',
    }) 

    
    expect(login.status).toEqual(200);
  });
})