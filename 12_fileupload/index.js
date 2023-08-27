const express = require("express");
const multer = require("multer");
const path = require("path"); // path는 express의 내장함수라서 따로 설치 필요 없음
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer(위치는 body-parser 아래에 둔다.)
const upload = multer({
  // dest:업로드할 파일을 저장할 경로를 지정
  dest: "uploads/",
});
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
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //파일 크기 제한 -> 5M byte
});

app.get("/", (req, res) => {
  res.render("index");
});

// 싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

// 멀티(ver1)
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

// 멀티(ver2)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    //키 값은 무조건 name
    console.log(req.files);
    console.log(req.body);
  }
);

// 동적
app.post("/dynamicFile", uploadDetail.single("dynamic-file"), (req, res) => {
  console.log(req.file, req.body);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
