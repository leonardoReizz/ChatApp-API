import UserRepository from "../../Repositories/UserRepository";
import GetUserByEmailUseCase from "./GetUserByEmailUseCase";
import GetUserByEmailController from "./GetUserByEmailController";

const userRepository = new UserRepository();
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);
const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase);

export { getUserByEmailController };