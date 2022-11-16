import FriendRepository from "../../Repositories/FriendRepository";
import ListMyFriendsController from "./ListMyFriendsController";
import ListMyFriendsUseCase from "./ListMyFriendsUseCase";



const friendRepository = new FriendRepository();
const listMyFriendsUseCase = new ListMyFriendsUseCase(friendRepository);
const listMyFriendsController = new ListMyFriendsController(listMyFriendsUseCase);

export { listMyFriendsController };