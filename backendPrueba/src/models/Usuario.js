import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const UsuarioModel = {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  contrasena: { type: DataTypes.STRING, allowNull: false },
  admin: { type: DataTypes.BOOLEAN, defaultValue: false },
};

const Usuario = db.define("usuarios", UsuarioModel);

export { Usuario };
