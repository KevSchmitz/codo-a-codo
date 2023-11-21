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
router.get("/shop", shopView);
router.get("/shop", getAllItems);

router.get("/shop/item/:id", itemView);
router.get("/shop/item/:id", getItem);

router.post("/shop/item/:id/add", addToCart);

router.get("/shop/cart", cartView);
router.get("/shop/cart", getCartItems);

router.post("/shop/cart");

module.exports = router;
