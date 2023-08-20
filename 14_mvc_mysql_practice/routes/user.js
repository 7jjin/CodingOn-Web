const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index); // 로그인 할 건지 회원가입 할 건지 선택하는 페이지 불러오기

router.get("/signup", controller.signup); // 회워가입 페이지 불러오기
router.post("/signup", controller.post_signup); // 회워가입 정보 백엔드로 넘겨주기

router.get("/signin", controller.signin); // 로그인 페이지 불러오기
router.post("/signin", controller.post_signin); // 로그인 정보 백엔드로 넘겨주기

router.post("/profile", controller.post_profile); // 프로필 정보 확인하기
router.patch("/profile/edit", controller.edit_profile); // 변경한 회원정보 수정하기
router.delete("/profile/delete", controller.delete_profile); // 회원정보 삭제하기

module.exports = router;
