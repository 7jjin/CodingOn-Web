const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

// http서버
const server = http.createServer(app);
// socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  // 이전 버전
  //   socket.on("typeone", (res) => {
  //     console.log(`client : ${res.left}`);
  //     socket.emit("back_msg1", res);
  //   });
  //   socket.on("typetwo", (res) => {
  //     console.log(`client : ${res.left}`);
  //     socket.emit("back_msg1", res);
  //   });
  //   socket.on("typethree", (res) => {
  //     console.log(`client : ${res.left}`);
  //     socket.emit("back_msg1", res);
  //   });

  // 리팩토링 한 버전
  socket.on("msg", (res) => {
    socket.emit("back_msg1", res);
  });
});

// 서버
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
