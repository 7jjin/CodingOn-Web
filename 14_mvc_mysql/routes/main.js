const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

// 회원가입
router.get("/signup", controller.signup); // 회원가입 페이지 열기
router.post("/signup", controller.post_signup); // 데이터베이스에 회원정보 저장

// 로그인
router.get("/signin", controller.signin); // 로그인 페이지 열기
router.post("/signin", controller.post_signin); //로그인하기

// // 프로필
// router.post("/profile", controller.post_profile); // 프로필 정보 확인하기

// GET 조회 방식일때는 url을 query string 또는 파라미터 방식으로 저장
// query string 방식은 페이지 이동을 안하며 파라미터는 페이지를 이동(res.render)
router.get("/profile/:id", controller.profile);
router.patch("/profile/edit", controller.edit_profile); // 변경한 회원정보 수정하기

// 예시) 회원 구매목록
// router.get("/profile/buy", controller.buy);  이렇게 있으면 위에 파라미터 값이 아무거나 올 수 있기 때문에 이 페이지는 절때 열리지 않는다.
// 이 페이지를 열고 싶다면 /profile/:id보다 위에 있어야 한다.

module.exports = router;
