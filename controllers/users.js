const all = async (req,res) =>{
    res.json({message: "This is get all user "})
}

const get = async(req,res)=>{
    res.json({message:"This is get user by id"})
}

const add = async (req,res)=>{
    res.json({message:" This is add users "})
}

const update = async (req,res)=>{
    res.json({message:"This is update users"})
};

const drop = async(req,res)=>{
    res.json({message:"This is delete users"});
}

module.exports={
    all,
    get,
    add,
    update,
    drop
}