const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  loginView,
  login,
  registerView,
  register,
  logout,
} = require("../controllers/AuthControllers.js");

//ROUTES
router.get("/auth/login", loginView);
router.get("/auth/login", login);
router.post("/auth/login", login);

router.get("/auth/register", registerView);
router.post("/auth/register", register);

router.get("/auth/logout", logout);

module.exports = router;
