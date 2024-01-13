const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended:true}));

const userRouter = require("./routes/users");
const postRouter =require("./routes/posts");

server.use("/users/",userRouter);
server.use("/posts/",postRouter);


server.listen(6000,console.log("Server is listening at port : 6000 "));