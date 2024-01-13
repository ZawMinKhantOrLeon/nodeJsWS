let router = require("express").Router();
let userController = require("../controllers/users");

router.get("/",userController.all);

router.post("/add",userController.add);

router.route("/:id")
      .get(userController.get)
      .patch(userController.update)
      .delete(userController.drop);

module.exports = router;