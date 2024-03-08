import { Licencia } from "../models/Licencia.js";
import { Producto } from "../models/Producto.js";

const getCollections = async (req, res) => {
  const productos = await Producto.findAll({
    include: { model: Licencia, attributes: ["nombre"] },
    attributes: ["id", "nombre", "descripcion", "imagenCara"],
    order: [[Licencia, "nombre", "DESC"]],
  });
  const colecciones = [];
  const existeColeccion = [];

  productos.forEach((producto) => {
    if (!existeColeccion.includes(producto.licencia.nombre)) {
      existeColeccion.push(producto.licencia.nombre);
      colecciones.push(producto);
    }
  });

  res.json(colecciones.slice(0, 3));
};

export { getCollections };
