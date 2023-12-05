const fs = require("fs");
const productos = JSON.parse(fs.readFileSync("./data/database.json", "utf-8"));

const shopView = (req, res) => {
  res.render("shop", { titulo: "SHOP", productos });
};
const getAllItems = (req, res) => {};

//------
const itemView = (req, res) => {
  const id = req.params.id;
  const [producto] = productos.filter((producto) => producto.id === Number(id));
  console.log(id);
  console.log(productos);

  res.render("item", { titulo: `ITEM - ${id}`, producto: producto });
};
const getItem = (req, res) => {};

//------
const cartView = (req, res) => {
  res.render("cart", { titulo: "CART" });
};

//------
const addToCart = (req, res) => {};

//------
const getCartItems = (req, res) => {};

module.exports = {
  shopView,
  getAllItems,
  itemView,
  getItem,
  cartView,
  addToCart,
  getCartItems,
};
