"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//model
db.Visitor = require("./Visitor")(sequelize);

db.sequelize = sequelize;

module.exports = db;
