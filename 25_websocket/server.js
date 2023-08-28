const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// app.listen 아래에 써도 된다.
// 웹 소켓 서버 접속
const wss = new ws.Server({ server });

// 브라우저(클라이언트)들을 담을 배열변수
const sockets = [];
// socket변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");

  //sockets 배열에 브라우저 배열 추가
  sockets.push(socket);

  // 메세지 이벤트
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메세지: ${message}`);
    let data = JSON.parse(message);
    // socket.send(`서버메세지:${message}`);
    sockets.forEach((elem) => {
      elem.send(`${data.name}: ${data.msg}`);
    });
  });
  //오류이벤트
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다.", err);
  });
  //접속종류이벤트
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료");
  });
});
