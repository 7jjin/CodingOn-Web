const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

const router = require("./routes");
app.use("/", router);

app.use("*", (req, res) => {
  res.render("404");
});
// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
