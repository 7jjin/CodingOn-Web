const model = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.getinfo = (req, res) => {
  res.render("infos", { list: model });
};

exports.addinfo = (req, res) => {
  res.render("addinfo");
};

exports.postinfo = (req, res) => {
  const { name, gender, major } = req.body;
  console.log("req", req.body);
  model.push({
    id: model.length + 1,
    name,
    gender,
    major,
  });
  res.send(req.body);
};
