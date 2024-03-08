import express from "express";
const router = express.Router();

// CONTROLLERS
import {
  registrarUsuario,
  iniciarSesion,
} from "../controllers/authControllers.js";

// ROUTES
router.route("/login").get().post(iniciarSesion);

router.route("/register").get().post(registrarUsuario);

router.route("/logout").get();

export default router;
