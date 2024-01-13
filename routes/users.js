let router = require("express").Router();

router.get("/",(req,res)=>{
      res.json("This is users route");
})

router.post("/add",(req,res)=>{
    res.json("This is user add route");
})

router.route("/:id")
      .get((req,res)=> res.json("This is get user by id route"))
      .patch((req,res)=>res.json("This is update route"))
      .delete((req,res) => res.json("This is delete route"));

module.exports = router;