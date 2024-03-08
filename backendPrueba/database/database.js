import { Sequelize } from "sequelize";
import { DBNAME, USERNAME, PASSWORD, PORT, HOST, DIALECT } from "./dbConfig.js";

const db = new Sequelize(DBNAME, USERNAME, PASSWORD, {
  port: PORT,
  host: HOST,
  dialect: DIALECT,
});

export default db;
