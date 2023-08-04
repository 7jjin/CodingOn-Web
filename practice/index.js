const express = require("express");
const app = express();
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  //   console.log(`Listening in port ${PORT}! http://localhost:${PORT}`);
});
