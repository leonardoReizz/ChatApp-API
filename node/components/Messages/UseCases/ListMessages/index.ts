import MessageRepository from "../../Repositories/MessageRepository";
import ListMessagesController from "./ListMessagesController";
import ListMessagesUseCase from "./ListMessagesUseCase";


const messageRepository = new MessageRepository();
const listMessageUseCase = new ListMessagesUseCase(messageRepository);
const listMessagesController = new ListMessagesController(listMessageUseCase);

export { listMessagesController };