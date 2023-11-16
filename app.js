// Import express
const express = require("express");
const app = express();

// Import routes
const MainRoutes = require("./src/routes/MainRouter.js");

// Path
const path = require("path");

// Crear puerto
const PORT = 3000;

// Parsear a JSON
app.use(express.json());

// Setting views
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// ROUTES
app.use("/", MainRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
