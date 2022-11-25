import mongoose from "mongoose";
import app from "./app";
import Io from './socket';
import dotenv from 'dotenv';
import {Server} from 'socket.io';
dotenv.config();

const appServer = app.listen(3333, ()=> {
   console.log('express up');
});

const socket = new Io(appServer);

mongoose.connect("mongodb://chatappdb-user:chat-203-app@189.17.218.10:55300/chatapp?authMechanism=DEFAULT")
.then(() => {
    console.log('mongo up');
})
.catch((err) => {
    console.log(err, ' error mongo');
})


export { app, appServer, socket };
