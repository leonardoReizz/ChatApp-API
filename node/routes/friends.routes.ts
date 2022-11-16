import { Request, Response, Router } from "express";
import { listMyFriendsController } from "../components/Friends/UseCases/ListMyFriends";
import checkToken from '../authorization/checkToken';

const friendsRouter = Router();

friendsRouter.get('/:userId', checkToken,  async (req: Request, res: Response) => {
  return listMyFriendsController.handle(req, res);
});

export default friendsRouter;