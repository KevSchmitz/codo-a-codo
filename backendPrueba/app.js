import express from "express";
import cors from "cors";
import mainRoutes from "./src/routes/mainRoutes.js";
import shopRoutes from "./src/routes/shopRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import db from "./database/database.js";
import "./database/associations.js";

const app = express();
const PORT = 3031;

//MIDDLEWARE
//CORS
app.use(cors());
//JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

const dbConnection = async () => {
  await db.authenticate();
  await db.sync();
};

app.listen(PORT, () => {
  dbConnection();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
