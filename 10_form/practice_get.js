const express = require("express");
const app = express();
const PORT = 8000;

//body-parser : 데이터를 받아오는 방식(둘다 언제 쓰일지 몰라서 두개 모두 쓰는게 좋다)
app.use(express.urlencoded({ extended: true })); // form 데이터
app.use(express.json()); // JSON 데이터
// view engine
app.set("view engine", "ejs");
app.set("views", "./view");

app.get("/", (req, res) => {
  //   console.log(req.body);
  res.render("practice_post");
});

// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("practice_result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//   });
// });
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("practice_result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
