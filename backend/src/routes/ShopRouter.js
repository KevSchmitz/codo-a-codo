const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  shopView,
  getAllItems,
  itemView,
  getItem,
  cartView,
  addToCart,
  getCartItems,
} = require("../controllers/ShopControllers.js");

// ROUTES
router.get("/", shopView);
router.get("/", getAllItems);

router.get("/item/:id", itemView);
router.get("/item/:id", getItem);

router.post("/item/:id/add", addToCart);

router.get("/cart", cartView);
router.get("/cart", getCartItems);

router.post("/cart");

module.exports = router;
