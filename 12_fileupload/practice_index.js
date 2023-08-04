const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 메인 페이지 라우팅
app.get("/", (req, res) => {
  res.render("practice_index");
});

// 회원가입 요청 처리 라우팅
app.post("/getlogin", uploadDetail.single("file"), (req, res) => {
  const formData = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    file: req.file ? req.file.path : null,
  };
  // 데이터를 결과 페이지로 렌더링하여 보냄
  res.render("login", formData);
});

// 결과 페이지 라우팅
app.get("/login", (req, res) => {
  const formData = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    file: req.file ? req.file.path : null,
  };
  res.render("login", { formData });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//비동기로는 대체로 페이지 이동을 하지 않는다.
// 그냥 회원가입 같은거는 데이터베이스에 넣고 끝나는 것이라서 비동기 방식으로 할 필요가 없다.
// 페이지를 옮기고 싶다면 동기방식을 사용하는 것이 좋음
