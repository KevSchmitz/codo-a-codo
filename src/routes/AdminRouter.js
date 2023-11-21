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

router.get("/admin", adminView);

// CREATE
router.post("admin/create", createItem);
router.get("/admin/create", createView);

// EDIT
router.put("/admin/edit/:id", updateItem);
router.get("/admin/edit/:id", editView);

// DELETE
router.delete("/admin/edit/:id", deleteItem);

module.exports = router;
