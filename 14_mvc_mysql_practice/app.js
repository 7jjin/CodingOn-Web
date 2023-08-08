const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 8000;

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt9",
});

conn.connect((err) => {
  if (err) {
    console.log("err");
    return;
  }
  console.log("connect");
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// 회원가입 페이지 보여주기
app.get("/user/signup", (req, res) => {
  res.render("signup");
});

// 회원가입 하기
app.post("/user/signup", (req, res) => {
  const query = `insert into user_practice (userid,name,pw) values ('${req.body.userid}','${req.body.name}','${req.body.pw}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send(req.body);
});

// 로그인 페이지 보여주기
app.get("/user/signin", (req, res) => {
  res.render("signin");
});

// 로그인 하기
app.post("/user/signin", (req, res) => {
  const { name, userid, pw } = req.body;
  const query = `select * from user_practice where name='${name}'`;
  conn.query(query, (err, rows) => {
    if (
      rows[0].name === name &&
      rows[0].userid === userid &&
      rows[0].pw === pw
    ) {
      res.send({ success: true });
      console.log("true");
    } else {
      res.send({ success: false });
      console.log("false");
    }
  });
});

// 프로필 보여주기
app.get("/user/profile", (req, res) => {
  res.render("profile");
});

app.get("*"),
  (req, res) => {
    res.render("404");
  };

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
