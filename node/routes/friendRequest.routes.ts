import { Router, Request, Response } from 'express';
import checkToken from '../authorization/checkToken';
import { createFriendRequestController } from "../components/FriendRequest/UseCases/CreateFriendRequest/index";
import {listMyFriendsController} from "../components/FriendRequest/UseCases/ListMyFriendsRequest/index";

const friendRequestRouter = Router();

friendRequestRouter.post('/', checkToken, async (req: Request, res: Response) => {
  return await createFriendRequestController.handle(req, res);
});

friendRequestRouter.get('/:userId', checkToken, async (req: Request, res: Response) => {
  return await listMyFriendsController.handle(req, res);
});

export default friendRequestRouter;