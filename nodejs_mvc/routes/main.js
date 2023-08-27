const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/", controller.comments);

// 전체 목록 보기
router.get("/comments");

// 상세 목록 보기
router.get("/comment/:name");

module.exports = router;
