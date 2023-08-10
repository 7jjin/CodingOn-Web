const express = require("express");
const router = express.Router(); // 라우터만 가져오기   app->router로 바꾸기
const controller = require("../controller/CComment");

router.get("/", controller.main);

// GET /comments
router.get("/comments", controller.comments);

//GET /comment/:id
router.get("/comment/:id", controller.comment);

module.exports = router;
