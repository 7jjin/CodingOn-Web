const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "name",
  password: "1234",
  database: "kdt9",
});
conn.connect((err) => {
  if (err) {
    console.log("err");
    return;
  }
  console.log("connect");
});

// 방명록 전체 조회
exports.getVisitors = (callback) => {
  const query = "select * from visitor"; // 쿼리문 작성
  conn.query(query, (err, rows) => {
    // mysql 연결 후 쿼리 적용 err-> err처리 rows->결과 값
    console.log(rows);
    callback(rows);
  });
};

// 방명록 한개 조회
exports.getVisitor = (id, callback) => {
  const query = `select * from visitor where id=${id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

// 방명록 등록하기
exports.postVisitor = (data, callback) => {
  const query = `INSERT INTO visitor (name,comment) VALUES ('${data.name}','${data.comment}')`;
  conn.query(query, (err, rows) => {
    callback(rows);
  });
};

// 방명록 수정
exports.patchVisitor = (data, callback) => {
  const query = `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id}`;
  conn.query(query, (err, rows) => {
    console.log("rows", rows);
    if (err) {
      console.log(err);
      return;
    }
    callback();
  });
};

// 방명록 삭제
exports.deleteVisitor = (data, callback) => {
  const query = `delete from visitor where id=${data.id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback();
  });
};
