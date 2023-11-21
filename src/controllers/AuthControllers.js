const loginView = (req, res) => {
  res.render("login", { titulo: "LOGIN" });
};
const login = (req, res) => {};
const registerView = (req, res) => {
  res.render("register", { titulo: "REGISTER" });
};
const register = (req, res) => {};
const logout = (req, res) => {};

module.exports = {
  loginView,
  login,
  registerView,
  register,
  logout,
};
