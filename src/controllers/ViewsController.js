const fs = require("fs");
const heroesJSON = fs.readFileSync("./data/heroes.json", "utf-8");
const heroes = JSON.parse(heroesJSON);

const homeView = (req, res) => {
  res.render("home", { titulo: "HOME", heroes: heroes });
};

const index = (req, res) => {
  res.render("");
};

module.exports = {
  homeView,
  // index,
};
