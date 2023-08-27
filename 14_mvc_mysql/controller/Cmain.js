const model = require("../model/Model");

/////////////////////////////////////////
// Get
// 메인 페이지
const main = (req, res) => {
  res.render("index");
};
// 회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};
// 로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

////////////////////////////////////////
// POST
// 회원가입
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    console.log("req.body", req.body);
    res.json({ result: true });
  });
};
// 로그인
const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    console.log("signin", req.body);
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

// 회원정보 조회 페이지
// const profile = (req, res) => {
//   model.post_profile(req.body, (result) => {
//     console.log("profile", req.body);
//     if (result.length > 0) {
//       res.render("profile", { data: result[0] });
//     }
//   });
// };

const profile = (req, res) => {
  model.db_profile(req.params, () => {
    console.log("req.params", req.params);
    res.render("profile", { data: result[0] });
  });
};

const edit_profile = (req, res) => {
  model.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};

module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  // post_profile,
  edit_profile,
  profile,
};
