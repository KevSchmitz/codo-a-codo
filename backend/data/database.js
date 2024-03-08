const { Sequelize } = require("sequelize");
const {
  DBNAME,
  USERNAME,
  PASSWORD,
  HOST,
  PORT,
  DIALECT,
} = require("./dbConfig.js");

const db = new Sequelize(DBNAME, USERNAME, PASSWORD, {
  port: PORT,
  host: HOST,
  dialect: DIALECT,
});

module.exports = db;
