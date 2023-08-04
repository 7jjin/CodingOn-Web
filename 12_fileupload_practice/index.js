const express = require("express");
const multer = require("multer");
const path = require("path"); // path는 express의 내장함수라서 따로 설치 필요 없음
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  // storage = 저장 할 공간에 대한 정보
  // diskStorage = 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); // 첫번째는 에러처리 두번째는 경로 지정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log("ext", ext);
      done(null, req.body.uwerId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //파일 크기 제한 -> 5M byte
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
