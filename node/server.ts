import mongoose from "mongoose";
import app from "./app";

app.listen(3333, ()=> {
   console.log('express up');
});

mongoose.connect("mongodb://chatappdb-user:chat-203-app@189.17.218.10:55300/chatapp?authMechanism=DEFAULT")
.then(() => {
    console.log('mongo up');
})
.catch((err) => {
    console.log(err, ' error mongo');
})


export { app };
