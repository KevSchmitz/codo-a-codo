const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  adminView,
  createView,
  createItem,
  editView,
  updateItem,
  deleteItem,
} = require("../controllers/AdminControllers.js");

router.get("/", adminView);

// CREATE
router.post("/create", createItem);
router.get("/create", createView);

// EDIT
router.put("/edit/:id", updateItem);
router.get("/edit/:id", editView);

// DELETE
router.delete("/edit/:id", deleteItem);

module.exports = router;
