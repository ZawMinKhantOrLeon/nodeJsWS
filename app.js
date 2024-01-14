require("dotenv").config();

const mongoose =require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`)
.then(()=>{console.log("Mongoose server has started")
})
.catch((err)=>{
    console.error(err)
})

const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended:true}));

const userRouter = require("./routes/users");
const postRouter =require("./routes/posts");

server.use("/users/",userRouter);
server.use("/posts/",postRouter);


server.listen(process.env.PORT,console.log("Server is listening at port : 6000 "));