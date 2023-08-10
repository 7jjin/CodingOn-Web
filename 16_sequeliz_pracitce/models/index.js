"use strict";

const Sequelize = require("sequelize"); // 시퀄라이즈 모듈 사용
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

// Squelize 객체를 생성해서 Mysql과 연결한다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델 정의
db.User = require("./User")(sequelize);

db.sequelize = sequelize;

module.exports = db;
