const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 8000;
let pass = "";
const salt = crypto.randomBytes(16).toString("hex"); // salt값을 렌덤값으로 저장, toString() 하는 이유: 인코딩으로 바꾸기 위해
const leng = 1000; // 반복횟수
const key = 64; // 생성할 키의 길이
const algo = "sha512"; //알고리즘 종류

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { pw } = req.body;
  // createHash: 지정한 알고리즘을 이용하여 해시 생성
  // const pass = crypto.createHash("sha512").update(pw).digest("base64");
  // pdkdf2(Sync):(Sync가 붙으면 동기) : 비밀번호 기반 키도출함수 -> 좀 더 보안이 좋다. 두번째랑 세번째 인자는 환경변수로 해서 숨겨야한다.
  pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64");
  res.send(pass);
});

app.post("/verify", (req, res) => {
  const { pw } = req.body;
  const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo); // 버퍼값으로 결과가 나온다.
  console.log("compare", compare);
  //timingSafeEqual : 두개의 버퍼를 상수시간으로 비교하는 함수
  const result = crypto.timingSafeEqual(compare, Buffer.from(pass, "base64")); // buffer값으로 비교를 해준다.
  //   if (compare === pass) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
