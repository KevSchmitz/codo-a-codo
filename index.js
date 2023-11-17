// Iniciar EXPRESS
const express = require("express");
const app = express();

// PATH
const path = require("path");

// PUERTO
const port = process.env.PORT || 3030; //process.env.PORT es para las variables de entorno

// MIDDLEWARE
// CORS permite la comunicación entre cliente y API
const cors = require("cors");
app.use(cors());
// JSON() parsea a 'json' la información proveniente del body (req.body)
app.use(express.json());
// hasta acá conforma el middleware

// VIEWS
// ruta de las vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

// ruta de carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const mainRoutes = require("./src/routes/MainRouter.js");

// ROUTES
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`Servidor corriende en el puerto ${port}`);
});
