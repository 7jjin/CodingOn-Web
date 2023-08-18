const { User } = require("../models");
const bcrypt = require("bcrypt");
const salt = 10;

exports.index = (req, res) => {
  res.render("index");
};

// 로그인 페이지 불러오기
exports.getlogin = (req, res) => {
  res.render("login");
};

// 로그인 정보 확인하기
exports.postlogin = (req, res) => {
  const { userid, pw } = req.body;
  User.findOne({
    where: {
      userid,
    },
  }).then((result) => {
    console.log("login", result);
    const compare = comparePassword(pw, result.pw);
    res.send({ compare });
  });
};

// 회원가입 페이지 불러오기
exports.getsignup = (req, res) => {
  res.render("signup");
};

// 회원가입 하기
exports.postsignup = (req, res) => {
  User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: bcrypt.hashSync(req.body.pw, salt),
  }).then((result) => {
    console.log("signup", result);
    res.send({ result: true });
  });
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
