const express = require("express");
const app = express();
const PORT = 8000;

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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
