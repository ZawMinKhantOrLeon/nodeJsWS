const DB = require('../schemas/user');
const Helper = require('../utility/helper');

const all = async (req,res,next) =>{
    let allUsers =await DB.find();
    Helper.returnResult(res,"success",allUsers);
}

const get = async(req,res,next)=>{
    let getUserById = await DB.findById(req.params.id);
    Helper.returnResult(res,"success",getUserById);
}

const add = async (req,res,next)=>{
    let reqBody =new DB(req.body);
    let newUser =await reqBody.save();
    Helper.returnResult(res,"added success",newUser);
}

const update = async (req,res,next)=>{
    let user = await DB.findById(req.params.id);
    if(user){
        let returnUser=await DB.findByIdAndUpdate(user._id,req.body);
        Helper.returnResult(res,"updated success",returnUser);
    }
   else{
    res.json({message:"no user with that id"});
   }
};

const drop = async(req,res,next)=>{
    let deleted = await DB.findByIdAndDelete(req.params.id);
    Helper.returnResult(res,"deleted success",deleted);
}

module.exports={
    all,
    get,
    add,
    update,
    drop
}