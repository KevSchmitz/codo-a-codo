import { Producto } from "../models/Producto.js";
import { Licencia } from "../models/Licencia.js";
import { Categoria } from "../models/Categoria.js";

const crearObjeto = async (req, res) => {
  const payload = req.body;
  const licencia = await Licencia.findByPk(payload.licenciaId);
  const nombreLicencia = licencia.nombre;

  const { imagenCara, imagenDorso } = req.files;
  const imagenCaraPath = imagenCara[0].path.split("\\");
  const imagenDorsoPath = imagenDorso[0].path.split("\\");

  const imagenCaraName = imagenCaraPath[imagenCaraPath.length - 1];
  const imagenDorsoName = imagenDorsoPath[imagenDorsoPath.length - 1];

  const licenciaConGuiones = nombreLicencia.replaceAll(" ", "-");

  payload.imagenCara = `/img/${licenciaConGuiones}/${imagenCaraName}`;
  payload.imagenDorso = `/img/${licenciaConGuiones}/${imagenDorsoName}`;

  await Producto.create(payload);
};

const obtenerProductosAdmin = async (req, res) => {
  const productos = await Producto.findAll({
    include: { model: Licencia, attributes: ["nombre"] },
    attributes: ["id", "sku", "nombre"],
  });
  res.json(productos);
};

const obtenerPropiedades = async (req, res) => {
  const licencias = await Licencia.findAll();
  const categorias = await Categoria.findAll();
  const propiedades = { licencias, categorias };
  res.json(propiedades);
};

const obtenerProducto = async (req, res) => {
  const id = req.params.id;
  const producto = await Producto.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.json(producto);
};

const editarProducto = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const licencia = await Licencia.findByPk(payload.licenciaId);
  const nombreLicencia = licencia.nombre;

  const { imagenCara, imagenDorso } = req.files;
  const imagenCaraPath = imagenCara[0].path.split("\\");
  const imagenDorsoPath = imagenDorso[0].path.split("\\");

  const imagenCaraName = imagenCaraPath[imagenCaraPath.length - 1];
  const imagenDorsoName = imagenDorsoPath[imagenDorsoPath.length - 1];

  const licenciaConGuiones = nombreLicencia.replaceAll(" ", "-");

  payload.imagenCara = `/img/${licenciaConGuiones}/${imagenCaraName}`;
  payload.imagenDorso = `/img/${licenciaConGuiones}/${imagenDorsoName}`;

  await Producto.update(payload, { where: { id } });
};

const eliminarProducto = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  await Producto.destroy({ where: { id } });
};

export {
  crearObjeto,
  obtenerProductosAdmin,
  obtenerProducto,
  editarProducto,
  obtenerPropiedades,
  eliminarProducto,
};
