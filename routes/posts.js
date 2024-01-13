let router = require("express").Router();

router.get("/",(req,res)=>{
      res.json("This is posts route");
})

router.post("/add",(req,res)=>{
    res.json("This is post add route");
})

router.route("/:id")
      .get((req,res)=> res.json("This is get post by id route"))
      .patch((req,res)=>res.json("This is post update route"))
      .delete((req,res) => res.json("This is post delete route"));

module.exports = router;