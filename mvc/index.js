const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes"); // 이 폴더에서 기본으로 찾는 것은 index.js이다.
app.use("/", router);
//example)
//const userRouter = require("./routes/user");
//app.use("/user",userRouter) 이렇게 쓰면 루트 디렉토리가 localhost:8000/user로 된다.

//* 맨마지막 선언
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
