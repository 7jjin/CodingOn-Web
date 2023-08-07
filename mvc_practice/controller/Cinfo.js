const info = require("../model/Minfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const { id, pw } = req.body;
  console.log("back", req.body);
  const vaild = info.infos();
  if (id === vaild[0].validId && pw === vaild[0].validPw) {
    res.send({ success: true }); // 프론트로 데이터 보내기
  } else {
    res.send({ success: false });
  }
};
