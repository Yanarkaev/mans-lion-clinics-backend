const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const roleMiddleWare = require("./middlewares/role.middleware");
const fileMiddleware = require("./middlewares/images.upload");

const router = Router();

router.post(
  "/signup",
  roleMiddleWare,
  fileMiddleware.single("img"),
  usersController.signUp
);
router.post("/signin", usersController.signIn);
router.patch("/:id", fileMiddleware.single("img"), usersController.addImg);
router.get("/", fileMiddleware.single("img"), usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.get("/users/chatusers", usersController.getChatUsers);
module.exports = router;
