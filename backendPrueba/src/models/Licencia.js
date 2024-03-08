import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const LicenciaModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
};

const Licencia = db.define("licencias", LicenciaModel, { timestamps: false });
export { Licencia };
