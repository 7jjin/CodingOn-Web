const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

const router = require("./routes");
app.use("/", router); //루트에 접근했을 때 router로 이동

app.use("*", (req, res) => {
  res.render("404");
});
// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
