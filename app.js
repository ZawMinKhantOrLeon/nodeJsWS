const express = require('express');
const server = express();
server.use(express.json());

server.listen(6000,()=>console.log("server is listening on port : 6000"));

const users=[{
        id:1,
        name:"Johan",
        email:"johan@gmail.com",
        age:22,
    }
    ,{  
        id:2,
        name:"Jhon",
        email:"jhon@gmail.com",
        age:20,
    },
    {   
        id:3,
        name:"Leon",
        email:"leon@gmail.com",
        age:21,
    }]

server.get('/',() =>{
    console.log("This is / route");
});

server.get('/users',(req,res,next)=>{
    res.json(users);
    console.log("You are in users route");
})

server.get('/user/:id',(req,res,next)=>{
    const user = users.find(user => user.id === req.params.id);
   if(user){
    console.log("You are in user route");
    res.json(user);
   }
   else{
    console.log("There is no such user");
   }
})

server.post('/user/',(req,res,next)=>{
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;

    let newUser = {
        id: id,
        name: name,
        email: email,
        age: age
    }
    users.push(newUser);
    res.json(users);
    console.log("New User added");
});

server.patch('/user/:id/:name',() =>{
    const id = req.params.id;
    const name = req.params.name;
    let user = users.find(user => user.id === id);
    if(user){
        user.name = name;
    }
    res.json(users);
    console.log("user updated");
})
server.delete("/user/:id/",()=>{
    const id = req.params.id;
    let user = users.find(user => user.id === id);
    if(user){
        users.filer(user => user.id != id);
        res.json(users);
        console.log("user deleted");
    }
    else{
        console.log("user not found");
    }
})

server.get("*",(req,res)=>{
    res.json({
        message:"url not found"
    });
})



