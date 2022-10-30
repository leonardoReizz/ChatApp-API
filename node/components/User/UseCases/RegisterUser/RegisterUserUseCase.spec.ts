import { register } from "ts-node";
import UserRepositoryInMemory from "../../Repositories/in-memory/UserRepositoryInMemory"
import RegisterUserUseCase from "./RegisterUserUseCase";

describe('Register User', () => {
    let userRepositoryInMemory: UserRepositoryInMemory;
    let registerUseUseCase: RegisterUserUseCase;

    beforeAll(() => {
        userRepositoryInMemory: new UserRepositoryInMemory();
        registerUseUseCase = new RegisterUserUseCase(userRepositoryInMemory);
    });

    it('should not be able to register, invalid fullName', async () => {
        const user = {
            fullName: '',
            email: 'joaopaulo@gmail.com',
            password: 'joaopaulo@123',
        }

        try {
            await registerUseUseCase.execute(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Invalid fullName');
        }
    });

    it('should not be able to register, invalid email', async () => {
        const user = {
            fullName: 'Joao Paulo dos Santos',
            email: '',
            password: 'joaopaulo@123',
        }

        try {
            await registerUseUseCase.execute(user);
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Invalid email');
        }
    });

    it('should not be able to register, invalid password', async () => {
        const user = {
            fullName: 'Joao Paulo dos Santos',
            email: 'joaopaulo@gmail.com',
            password: '',
        }

        try {
            await registerUseUseCase.execute(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Invalid password');
        }
    });

    // it('should not be able to register, invalid password', async () => {
    //     const user = {
    //         fullName: 'Joao Paulo dos Santos',
    //         email: 'joaopaulo',
    //         password: 'joaopaulo@222',
    //     }

    //     try {
    //         await registerUseUseCase.execute(user);
    //     } catch (error) {
                
    //     }
    // });

    it('should not be able to register, invalid password', async () => {
        const user = {
            fullName: 'Joao Paulo dos Santos',
            email: 'joaopaulo@gmail.com',
            password: 'joao23',
        }

        try {
            await registerUseUseCase.execute(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Password must be at least 8 characters long');
        }
    });

    it('should not be able to register, invalid password', async () => {
        const user = {
            fullName: 'Joao Paulo dos Santos',
            email: 'joaopaulo@gmail.com',
            password: 'joaopaulodossantos32eee@gmail.comtestesenha',
        }

        try {
            await registerUseUseCase.execute(user);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Password must have a maximum of 32 characters');
        }
    });
});