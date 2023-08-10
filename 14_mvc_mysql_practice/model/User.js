const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt9",
  port: 3306,
});
conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connect");
});

exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user_practice (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
  conn.query(query, (err, rows) => {
    console.log("post_signup", rows);
    callback();
  });
};

exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user_practice WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    console.log("post_signin", rows);
    callback(rows);
  });
};
