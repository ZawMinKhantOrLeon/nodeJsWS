let router = require("express").Router();
let postController = require("../controllers/posts");

router.get("/",postController.all);

router.post("/add",postController.add);

router.route("/:id")
      .get(postController.get)
      .patch(postController.update)
      .delete(postController.drop);

module.exports = router;