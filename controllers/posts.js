const all = async (req,res) =>{
    res.json({message: "This is get all post "})
}
const get = async(req,res)=>{
    res.json({message:"This is get post by id"})
}
const add = async (req,res)=>{
    res.json({message:" This is add post "})
}
const update = async (req,res)=>{
    res.json({message:"This is update post"})
};
const drop = async(req,res)=>{
    res.json({message:"This is delete post"});
}

module.exports= {
    all,
    get,
    add,
    update,
    drop
}