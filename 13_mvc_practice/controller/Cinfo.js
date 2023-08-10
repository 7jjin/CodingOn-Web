const info = require("../model/Minfo");

exports.main = (req, res) => {
  res.render("index");
};
// 각각의 module을 export하고 싶을 때

exports.login = (req, res) => {
  const { id, pw } = req.body;
  console.log("back", req.body);
  const vaild = info.infos();
  if (id === vaild.validId && pw === vaild.validPw) {
    res.send({ success: true }); // 프론트로 데이터 보내기
  } else {
    res.send({ success: false });
  }
};
