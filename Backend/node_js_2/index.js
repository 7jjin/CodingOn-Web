const express = require("express"); // 모듈 가져오기
// import express from 'express'
const app = express(); // 객체를 변수에 저장
const PORT = 8000;

// set => 서버의 속성을 지정하는 것
// views에 있는 폴더에 ejs파일을 열어라
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 불러오기
app.use("/public", express.static("./public"));
// 질문 : 상대 경로이든 절대 경로든 상관없나??  -> 상관없음
// 정답 : express.static에는 실제 폴더를 접근하는 것이다.

app.get("/", (req, res) => {
  // get방식으로 통신
  // 첫번째 값 = 도메인 위치 ( 예)localhost:8000/ )
  //   res.send("Hello Express");
  // send => 데이터를 보낼 때 사용, 클라이언트에 응답 데이터를 보낼 때
  res.send({
    result: true,
    code: 1000,
    message: "회원가입 성공",
    data: { name: "jo" },
  });
  // json형식으로 보낼때 이런 형식으로 보낸다.
});

app.get("/kdt", (req, res) => {
  // get방식으로 통신
  // 첫번째 값 = 도메인 위치 ( 예)localhost:8000/ )
  //res.send("Hello kdt");
  // render() 뷰 엔진 렌더링
  // render()는 뷰와 데이터를 같이 보낼 수 있다. <=> send는 데이터만 전달가능
  res.render("test", { name: "조진형" }); // ejs 파일을 연다.
});

app.get("/bug", (req, res) => {
  res.render("bug");
});

app.get("/fruit", (req, res) => {
  res.render("fruit", {
    apple: "사과",
    banana: "바나나",
    grape: "포도",
    kiwi: "키위",
  });
});

app.get("/gugu", (req, res) => {
  res.render("gugu", { su: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

// 서버 열어주는 것
// 별로 중요한 내용을 적지 않는다. (체크 용도)
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// ejs는 모듈을 불러오지 않아도 된다.
