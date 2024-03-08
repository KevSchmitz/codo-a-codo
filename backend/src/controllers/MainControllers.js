const fs = require("fs");
const productos = JSON.parse(fs.readFileSync("./data/database.json", "utf-8"));

const homeView = (req, res) => {
  const colecciones = [];
  const existeLicencia = [];
  productos.forEach((producto) => {
    if (!existeLicencia.includes(producto.licencia)) {
      existeLicencia.push(producto.licencia);
      colecciones.push(producto);
    }
  });
  res.render("home", { titulo: "CaC - Home", colecciones: colecciones });
};

const contactView = (req, res) => {
  res.render("contact", { titulo: "CONTACT" });
};

const aboutView = (req, res) => {
  res.json("Esta ruta devuelve la vista de About");
};

const faqsView = (req, res) => {
  res.send("Esta ruta devuelve la vista de FAQS");
};

module.exports = {
  homeView,
  contactView,
  aboutView,
  faqsView,
};
