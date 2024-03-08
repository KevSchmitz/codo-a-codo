import express from "express";
import {
  crearObjeto,
  editarProducto,
  obtenerProducto,
  obtenerProductosAdmin,
  obtenerPropiedades,
  eliminarProducto,
} from "../controllers/adminControllers.js";
import upload from "../../middlewares/multer.js";
const router = express.Router();

//ROUTES
router.route("/").get(obtenerProductosAdmin);

router
  .route("/create")
  .get(obtenerPropiedades)
  .post(
    upload.fields([
      { name: "imagenCara", maxCount: 1 },
      { name: "imagenDorso", maxCount: 1 },
    ]),
    crearObjeto
  );

router
  .route("/edit/:id")
  .get(obtenerProducto)
  .put(
    upload.fields([
      { name: "imagenCara", maxCount: 1 },
      { name: "imagenDorso", maxCount: 1 },
    ]),
    editarProducto
  );
router.route("/delete/:id").delete(eliminarProducto);

export default router;
