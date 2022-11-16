import FriendRequestRepository from "../../Repositories/FriendRequestRepository";
import ListMyFriendsUseCase from "./ListMyFriendsUseCase";
import ListMyFriendsController from "./ListMyFriendsController";


const friendRequestRepository = new FriendRequestRepository();
const listMyFriendsUseCase = new ListMyFriendsUseCase(friendRequestRepository);
const listMyFriendsController = new ListMyFriendsController(listMyFriendsUseCase);

export { listMyFriendsController };