const express = require("express");
const multer = require("multer");
const path = require("path"); // 폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const newName = path.basename(file.originalname, ext) + Date.now() + ext;
    cb(null, newName);
  },
});

const upload = multer({ storage });

app.post("/dynamic", upload.array("dynamic"), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

//router
app.get("/", (req, res) => {
  res.render("test");
});

app.use("*", (req, res) => {
  res.render("404");
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
