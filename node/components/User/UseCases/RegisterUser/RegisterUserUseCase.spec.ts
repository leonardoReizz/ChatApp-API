import getError from "../../../../utils/Erros/getError";
import UserRepositoryInMemory from "../../Repositories/in-memory/UserRepositoryInMemory";
import RegisterUserUseCase from "./RegisterUserUseCase";

describe('Register User Use Case', () => {
  let userRepository: UserRepositoryInMemory;
  let registerUserUseCase: RegisterUserUseCase;

  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
    registerUserUseCase = new RegisterUserUseCase(userRepository);
  });

  it('should be able to register user' , async () => {
    const register = await registerUserUseCase.execute({
      fullName: 'User test',
	    email: 'usertest@gmail.com',
	    password: 'user@123'
    });

    expect(register.status).toEqual(200);
  });

  it('should not be able to register user -> Invalid email' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: 'User test',
        email: '',
        password: 'user@123'
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Invalid email');
  });

  it('should not be able to register user -> Invalid fullName' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: '',
        email: 'usertest@gmail.com',
        password: 'user@123'
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Invalid fullName');
  });

  it('should not be able to register user -> Invalid password' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: 'User test',
        email: 'usertest@gmail.com',
        password: ''
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Invalid password');
  });

  it('should not be able to register user -> Password must be at least 8 characters long' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: 'User test',
        email: 'usertest@gmail.com',
        password: 'teste'
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Password must be at least 8 characters long');
  });

  it('should not be able to register user -> Password must have a maximum of 32 characters' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: 'User test',
        email: 'usertest@gmail.com',
        password: 'usertestpassword@123usertestpassword123321'
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Password must have a maximum of 32 characters');
  });

  it('should not be able to register user -> Email already exist' , async () => {
    const register: Error = await getError(async () => 
      registerUserUseCase.execute({
        fullName: 'User test',
        email: 'usertest@gmail.com',
        password: 'test@123'
      })
    )
    expect(register).toBeInstanceOf(Error);
    expect(register.message).toEqual('Email already exist');
  });
});