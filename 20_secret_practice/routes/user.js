const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

router.get("/", controller.index);
//로그인
router.get("/login", controller.getlogin);
router.post("/login", controller.postlogin);
//회원가입
router.get("/signup", controller.getsignup);
router.post("/signup", controller.postsignup);

module.exports = router;
