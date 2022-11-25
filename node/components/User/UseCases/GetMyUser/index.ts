import UserRepository from "../../Repositories/UserRepository";
import GetMyUserUseCase from "./GetMyUserUseCase";
import GetMyUserController from "./GetMyUserController";

const userRepository = new UserRepository();
const getMyUserUseCase = new GetMyUserUseCase(userRepository);
const getMyUserController = new GetMyUserController(getMyUserUseCase);

export { getMyUserController };