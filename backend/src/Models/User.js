const { DataTypes } = require("sequelize");
const db = require("../../data/database.js");

const UserModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  contraseña: { type: DataTypes.STRING, allowNull: false },
};

const User = db.define("users", UserModel);

module.exports = {
  User,
};
