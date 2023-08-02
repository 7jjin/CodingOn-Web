const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
// 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// veiw engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("practice_get");
});

app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
