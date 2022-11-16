import FriendRequestRepository from "../../Repositories/FriendRequestRepository";
import CreateFriendRequestUseCase from "./CreateFriendRequestUseCase";
import CreateFriendRequestController from "./CreateFriendRequestController";


const friendRequestRepository = new FriendRequestRepository();
const createFriendRequestUseCase = new CreateFriendRequestUseCase(friendRequestRepository);
const createFriendRequestController = new CreateFriendRequestController(createFriendRequestUseCase);

export { createFriendRequestController };