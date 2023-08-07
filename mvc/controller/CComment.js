const Comment = require("../model/MComment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comment", { commentInfos: Comment.comments() });
};

exports.comment = (req, res) => {
  //   console.log(req.params);
  //   console.log(req.params.id);
  const commentId = req.params.id;
  const comments = Comment.comments();
  console.log(comments[commentId - 1]);
  res.render("commentt", { commentInfo: comments[commentId - 1] });
};
