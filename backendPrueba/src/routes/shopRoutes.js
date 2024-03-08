import express from "express";
import {
  getProducts,
  getProductDetail,
  getCollection,
  agregarACarrito,
} from "../controllers/shopControllers.js";
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:coleccion").get(getCollection);

router.route("/item/:id").get(getProductDetail).post(agregarACarrito);

router.route("/item/:id/add").post();

router.route("/cart").get().post();

export default router;
