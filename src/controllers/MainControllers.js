const homeView = (req, res) => {
  res.render("home", { titulo: "HOME" });
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
