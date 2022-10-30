import mongoose from "mongoose";
import app from "./app";

app.listen(3333, ()=> {
   console.log('express up');
});

mongoose.connect("mongodb://sistema:sistema@189.17.218.10:55000/sistema")
.then(() => {
    console.log('mongo up');
})
.catch((err) => {
    console.log(err, ' error mongo');
})


export { app };
