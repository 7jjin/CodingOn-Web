const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);
//GET localhost:8000/user/signup
router.get("/signup", controller.signup);
//POST localhost:8000/user/signup
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

module.exports = router;
