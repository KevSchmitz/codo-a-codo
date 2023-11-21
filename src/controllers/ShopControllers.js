const shopView = (req, res) => {
  res.render("shop", { titulo: "SHOP" });
};
const getAllItems = (req, res) => {};

//------
const itemView = (req, res) => {
  const id = req.params.id;
  res.render("item", { titulo: `ITEM - ${id}` });
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
