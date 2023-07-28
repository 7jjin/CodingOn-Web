// const { a, b } = require("./module");
// console.log(a, b);

const http = require("http");
const fs = require("fs");
// 파일 시스템 가져오기

const server = http.createServer(function (req, res) {
  //   res.writeHead(200);
  //   res.write("<h1>Hello World</h1>");
  //   res.end("<p>End</p>");

  // 파일 전송
  try {
    const data = fs.readFileSync("./index.html"); // index.html 파일을 읽어오는 코드
    res.writeHead(200);
    res.end(data);
  } catch (error) {
    console.log(error);
    res.writeHead(404);
    res.end(error.message); // 에러 났을때 메세지 보내주는 객체
  }
});
// 순서가 중요하다. (requset먼저 , response 나중)
// 서버가 클라이언트로 보내는 것은 응답(res)

server.listen(8000, function () {
  console.log("8000번 포트로 실행");
});
// 서버 열기
