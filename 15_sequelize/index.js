const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require("./routes");
// app.use("/", indexRouter);

const visitorRouter = require("./routes/visitor");
app.get("/", (req, res) => {
  res.render("index");
});

//localhost:8000/visitor
app.use("/visitor", visitorRouter);

// 에러 페이지
app.use("*", (req, res) => {
  res.render("404");
});

// 기본값은 fasle
// false -> 테이블이 있으면 넘어가고 테이블이 없으면 만들어준다.(개발할 때만 사용)
// 테이블이 있으면 복수형태로 만들어준다. 없으면 새로만들어줌
// true -> 무조건 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
