const express = require("express");
const router = express.Router();

// CONTROLLERS
const { homeView } = require("../controllers/ViewsController.js");

// ROUTES
router.get("/", homeView);
// router.get("/index", index);

module.exports = router;
