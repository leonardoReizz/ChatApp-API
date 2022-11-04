import UserRepository from "../../Repositories/UserRepository";
import RegisterUserController from "./RegisterUserController";
import RegisterUserUseCase from "./RegisterUserUseCase";


const userRepository = new UserRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);

export default registerUserController;