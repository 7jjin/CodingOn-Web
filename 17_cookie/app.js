const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 일반 쿠기
// app.use(cookieParser());
app.use(cookieParser("asdfzxcvs"));

// cookie : 옵션객체
const cookieConfig = {
  maxAge: 40 * 1000, //1분
  signed: true,
};

app.get("/", (req, res) => {
  res.render("index_practice");
});

app.post("/", (req, res) => {
  const { option } = req.body;
  if (option === "cancel") {
    console.log();
    res.cookie("myCookie", "myValue", cookieConfig);
    res.send("set_cookie");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 던 점 : httponly를 쓰면 document.cookie가 안떠서 콘솔에 찍을 수가 없다. 그리고 값이 안나온다.
// 그리고 나는 쿠키가 있는 상태에서 모달창을 지우면 쿠키를 없애는 식으로 로직을 짯는데
// 그 반대로 하는 것이 더 효율적인 방법임.
