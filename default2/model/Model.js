const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const info = [
  {
    id: 1,
    name: "조진형",
    gender: "남자",
    major: "정보통신공학과",
  },
  {
    id: 2,
    name: "홍길동",
    gender: "여자",
    major: "디자인학과",
  },
  {
    id: 3,
    name: "안녕하",
    gender: "남자",
    major: "경제학과",
  },
  {
    id: 4,
    name: "바보",
    gender: "남자",
    major: "컴퓨터공학과",
  },
  {
    id: 5,
    name: "피카소",
    gender: "여자",
    major: "연극학과",
  },
  {
    id: 6,
    name: "최홍만",
    gender: "남자",
    major: "복싱학과",
  },
];

module.exports = info;
