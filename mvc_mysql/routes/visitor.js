const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

//GET / visitor 방명록 전체 보이기
router.get("/", controller.getVisitors);

// Get /visitor/get 방명록 하나 조회  //쿼리 스트링 방식
router.get("/get", controller.getVisitor);

// //Post /visitor/write 방명록 하나 생성
router.post("/write", controller.postVisitor);

// //Patch/ visitor/edit 방명록 하나 수정
router.patch("/edit", controller.patchVisitor);

// //Delete /visitor/delete 방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);
module.exports = router;
