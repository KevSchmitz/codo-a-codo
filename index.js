// Iniciar EXPRESS
const express = require("express");
const app = express();

// PATH
const path = require("path");

// DOTENV (para variables de entorno)
const dotenv = require("dotenv");
dotenv.config();

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
const shopRoutes = require("./src/routes/ShopRouter.js");
const authRoutes = require("./src/routes/AuthRouter.js");
const adminRoutes = require("./src/routes/AdminRouter.js");

// ROUTES
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// DATABASE
// Import a la base de datos
const db = require("./data/database.js");

// Conexión
const dbConnection = async () => {
  await db.authenticate();
  await db.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
  console.log("Base de datos conectada");
};

app.listen(port, () => {
  // dbConnection();
  console.log(`Servidor corriende en el puerto ${port}`);
});
