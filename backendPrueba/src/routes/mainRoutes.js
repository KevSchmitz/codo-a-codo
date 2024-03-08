import express from "express";
import { getCollections } from "../controllers/mainControllers.js";
const router = express.Router();

router.route("/").get(getCollections);

export default router;
