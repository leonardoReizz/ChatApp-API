import { Router, Request, Response } from "express";
import checkToken from "../authorization/checkToken";
import { sendMessageController } from "../components/Messages/UseCases/SendMessage";
import { listMessagesController } from "../components/Messages/UseCases/ListMessages";

const messagesRouter = Router();

messagesRouter.post('/', checkToken, (req: Request, res: Response) => {
  return sendMessageController.handle(req, res);
});

messagesRouter.get('/:idUser/:idUserFriend', checkToken, (req: Request, res: Response) => {
  return listMessagesController.handle(req, res);
});

export default messagesRouter;
