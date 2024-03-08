import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const ProductoModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  categoriaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  licenciaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  sku: { type: DataTypes.STRING, allowNull: false },
  precio: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  descuento: { type: DataTypes.INTEGER, allowNull: false },
  cuotas: { type: DataTypes.INTEGER, allowNull: false },
  imagenCara: { type: DataTypes.STRING, allowNull: false },
  imagenDorso: { type: DataTypes.STRING, allowNull: false },
};

const Producto = db.define("products", ProductoModel);

export { Producto };
