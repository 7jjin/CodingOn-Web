const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};
exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  //model
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  //model
  User.post_signin(req.body, (result) => {
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  });
};

exports.post_profile = (req, res) => {
  User.post_profile(req.body, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    }
  });
};

exports.edit_profile = (req, res) => {
  User.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.send({ result: true });
  });
};
