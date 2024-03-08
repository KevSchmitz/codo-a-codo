import { Categoria } from "../models/Categoria.js";
import { Licencia } from "../models/Licencia.js";
import { Producto } from "../models/Producto.js";

const getProducts = async (req, res) => {
  const productos = await Producto.findAll({
    include: [
      { model: Licencia, attributes: ["nombre"] },
      { model: Categoria, attributes: ["nombre"] },
    ],
    attributes: ["id", "nombre", "precio", "imagenCara", "imagenDorso"],
    order: [[Licencia, "nombre", "ASC"]],
  });
  // TODO: obtener productos en orden de licencia y nombre de producto
  res.json(productos);
};

const getProductDetail = async (req, res) => {
  const id = req.params.id;
  const producto = await Producto.findByPk(id);
  res.json(producto);
};

const getCollection = async (req, res) => {
  const coleccion = req.params.coleccion.toUpperCase();
  const productos = await Producto.findAll({
    where: { licencia: coleccion },
  });
  res.json(productos);
};

const agregarACarrito = async (req, res) => {
  res.json(req.body);
};

export { getProducts, getProductDetail, getCollection, agregarACarrito };
