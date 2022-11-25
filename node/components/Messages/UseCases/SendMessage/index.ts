import MessageRepository from "../../Repositories/MessageRepository";
import SendMessageUseCase from "./SendMessageUseCase";
import SendMessageController from "./SendMessageController";


const messageReposity = new MessageRepository();
const sendMessageUseCase = new SendMessageUseCase(messageReposity);
const sendMessageController = new SendMessageController(sendMessageUseCase);

export { sendMessageController}