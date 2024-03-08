import { Categoria } from "../src/models/Categoria.js";
import { Producto } from "../src/models/Producto.js";
import { Licencia } from "../src/models/Licencia.js";

Licencia.hasMany(Producto);
Producto.belongsTo(Licencia);

Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);
