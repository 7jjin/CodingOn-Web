const express = require("express");
const router = express.Router();
const controller = require("../controller/Cinfo");

router.get("/", controller.main);

router.post("/login", controller.login);

module.exports = router;
// 파일 전체를 export하고 싶을때
