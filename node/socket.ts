import socket from "socket.io";
import http from 'http';
import {DefaultEventsMap} from "socket.io/dist/typed-events";
import {IUserSocket} from "./types/IDefaultResult";
import {ISendMessage} from "./types/socket";


class Io {
  public io: socket.Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  public socket:  socket.Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
  private usersOnline: IUserSocket[] = [];

  constructor(appServer: http.Server) {
    this.setIo(appServer);
    this.start();
  }

  public setIo(appServer: http.Server): void{
    this.io = new socket.Server(appServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      }
    })
  }

  public start(): void{
    this.io.on('connection', (socket) => {
      this.socket = socket;
      this.usersOnline.push({socketId: socket.id, email: ''});

      socket.on('online', (email: string) => {
        const index = this.usersOnline.findIndex(
          (user) => user.socketId === socket.id
        );
        this.usersOnline[index].email = email;
        this.io.emit('usersOnline', this.usersOnline);
      });

      socket.on('sendMessage', (send: ISendMessage) => {
        const socketId = this.usersOnline.filter(
          (user) => user.email === send.email
        )[0].socketId;
        socket.to(socketId).emit(send.message);
      })

      socket.on('disconnect', () => {
        this.usersOnline = this.usersOnline.filter(
          (user) => user.socketId !== socket.id
        );
        console.log('disconnect')
        socket.broadcast.emit('usersOnline', this.usersOnline)
      })
    })
  }

  public disconnect(socketId: string): void {
    this.usersOnline.filter((user) => user.socketId !== socketId);
  }


}

export default Io;