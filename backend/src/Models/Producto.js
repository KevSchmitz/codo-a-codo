const { DataTypes } = require("sequelize");
const db = require("../../data/database.js");

const ProductoModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  categoria: { type: DataTypes.STRING, allowNull: false },
  licencia: { type: DataTypes.STRING, allowNull: false },
  nombreProducto: { type: DataTypes.STRING, allowNull: false },
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

module.exports = {
  Producto,
};
