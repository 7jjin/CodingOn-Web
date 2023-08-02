const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("app");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  console.log("back", req.body);
  const validId = "whwlsgud";
  const validPw = "1234";

  if (id === validId && pw === validPw) {
    res.send({ success: true }); // 프론트로 데이터 보내기
  } else {
    res.send({ success: false });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
