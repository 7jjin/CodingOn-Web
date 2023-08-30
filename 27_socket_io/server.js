const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8000;

app.use(cookieParser());

// http서버
const server = http.createServer(app);
// socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("client");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});

io.on("connection", (socket) => {
  socket.on("join", (res) => {
    //채팅방을 생성하는 방법은 join(방 아이디) 사용. 방이 존재하면 그 방으로 접속
    socket.join(res);
    socket.room = res; // 방 마다
    // console.log("조인 후", socket.rooms);

    //broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
    socket.broadcast.to(res).emit("create", socket.id);
  });
  socket.on("message", (res) => {
    // io.to(특정방아이디).emit(이벤트) : 특정 방의 전체 사용자에게 메세지 전달
    const roomInfo = io.sockets.adapter.rooms.get(socket.room);
    console.log(res, socket.id);
    io.to(socket.room).emit("chat", res, socket.id);
  });
  socket.on("leave", () => {
    socket.leave(socket.room);
    const roomInfo = io.sockets.adapter.rooms.get(socket.room).size;
    // console.log(roomInfo);
  });
});

// 서버
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
