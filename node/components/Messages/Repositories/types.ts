export interface CreateMessage {
  idUserSend: string;
  idUserReceive: string;
  message: string;
}

export interface ListMessages {
  idUser: string;
  idUserFriend: string;
}