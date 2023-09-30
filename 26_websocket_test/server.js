const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//투표결과 초기화 변수
let votes = {
  typeOne: 0,
  typeTwo: 0,
};

//웹소켓 서버 접속
const wss = new ws.Server({ server });
const sockets = [];

//socket변수는 접속한 브라우저
wss.on("connection", (socket) => {
  sockets.push(socket);
  socket.send(JSON.stringify(votes));
  socket.on("message", (message) => {
    const data = JSON.parse(message); // 2. 서버에서는 json 형태로 파싱한다.
    votes[data.vote]++; // 3. votes객체에 typeOne의 값의 +1 해준다.
    sockets.forEach((elem) => {
      // 4. 여러 브라우저를 연다.
      elem.send(JSON.stringify(votes)); // 5. 브라우저(프론트)에 변화된 votes객체를 보내준다.
    });
  });
  //오류이벤트
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다", err);
  });
  //접속종료이벤트
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료됨");
  });
});
