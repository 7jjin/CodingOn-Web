const express = require("express");
const app = express();
const PORT = 8001;

//body-parser : 데이터를 받아오는 방식(둘다 언제 쓰일지 몰라서 두개 모두 쓰는게 좋다)
app.use(express.urlencoded({ extended: true })); // form 데이터
app.use(express.json()); // JSON 데이터
// view engine
app.set("view engine", "ejs");
app.set("views", "./view");

// router
app.get("/", (req, res) => {
  //   console.log(req.body);
  res.render("index", { title: "폼 전송 실습" });
});
// get은 req.query 사용
// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//   });
// });

// post은 req.body 사용
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// post 요청에서는 쿼리스트링이 붙으면 안된다.
// get만 쿼리스트링 보임
// Patch, Delete 는 모두 post에서 분리되어 나온 것임.
