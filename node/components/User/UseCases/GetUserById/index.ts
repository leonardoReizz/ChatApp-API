import UserRepository from "../../Repositories/UserRepository";
import GetUserByIdUseCase from "./GetUserByIdUseCase";
import GetUserByIdController from "./GetUserByIdController";


const userRepository = new UserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdController };