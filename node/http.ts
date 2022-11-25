import {Server} from "socket.io";
import  { app, appServer } from "./server";

const io = new Server(appServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
})

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on('sendMessage', (message: string) => {
    socket.emit('receiveMessage', message)
  })

  socket.emit('usersOnline', []);
  // We can write our socket event listeners in here...
});