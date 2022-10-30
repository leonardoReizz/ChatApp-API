
import UserRepositoryInMemory from '../../Repositories/in-memory/UserRepositoryInMemory';
import LoginUserUseCase from './LoginUserUseCase';


describe('Login User', () => {
    let userRepositoryInMemory: UserRepositoryInMemory;
    let loginUserUseCase: LoginUserUseCase;
    
    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        loginUserUseCase = new LoginUserUseCase(userRepositoryInMemory);
    });

    it('should not be able to login', async () => {
        const user = {
            email: '',
            password: 'senha123@',
        }
    
        try {
            await loginUserUseCase.execute(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Invalid email');

        }
    })

    
    it('should not be able to login', async () => {
        const user = {
            email: 'teste.com',
            password: '',
        }
        
        try {
            await loginUserUseCase.execute(user);
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Invalid password');
        }
    })
    
})