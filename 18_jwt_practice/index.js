const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// random keygeneration 에서 암호 찾아와도 됨.
const secret = "secretKey";
const userInfo = {
  id: "kdt9",
  pw: "1234",
  name: "홍길동",
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1].secret);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이아닙니다." });
    }
  } else {
    res.redirect("/login");
  }
});

// 로컬 스토리지에 토큰이 있을 때와 없을 때 구분
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;
    if (id === uId && pw === uPw) {
      const token = jwt.sign({ id }, secret);
      res.json({ result: true, token });
    } else {
      res.json({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log(error);
  }
  // const { id, pw } = req.body;
  // const token = jwt.sign({ id }, secret);
  // localStorage.setItem("token", "token");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
