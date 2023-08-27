const model = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comments", { list: model });
};

exports.comment = (req, res) => {
  console.log(req.params.name);
  // {name:"50"} :name 콜론뒤에 붙은 변수가 key, 입력한 값이 value
  res.render("comment", { data: comments[Number(req.params.name - 1)] });
};
