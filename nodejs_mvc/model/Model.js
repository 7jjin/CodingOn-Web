const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

// 임시데이터
const comments = [
  {
    id: 1,
    userid: "hello",
    date: "2023-08-05",
    comments: "안녕하세요",
  },
  {
    id: 2,
    userid: "happy",
    date: "2023-08-09",
    comments: "반갑습니다.",
  },
  {
    id: 3,
    userid: "lucky",
    date: "2023-08-12",
    comments: "행복하세요",
  },
  {
    id: 4,
    userid: "good",
    date: "2023-08-20",
    comments: "좋은 저녁되세요",
  },
];

module.exports = comments;
