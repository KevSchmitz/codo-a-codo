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
router.get("/login", loginView);
router.get("/login", login);
router.post("/login", login);

router.get("/register", registerView);
router.post("/register", register);

router.get("/logout", logout);

module.exports = router;
