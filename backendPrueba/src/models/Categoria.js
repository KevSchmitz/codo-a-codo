import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const CategoriaModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
};

const Categoria = db.define("categorias", CategoriaModel, {
  timestamps: false,
});
export { Categoria };
