import { Usuario } from "../models/Usuario.js";
import bcrypt from "bcrypt";

const registrarUsuario = async (req, res) => {
  const payload = req.body;
  console.log(payload);

  const hash = await bcrypt.hash(payload.contrasena, 10);
  payload.contrasena = hash;

  console.log(payload);

  await Usuario.create(payload);
};

const iniciarSesion = async (req, res) => {
  const { email, contrasena } = req.body;
  const user = await Usuario.findOne({
    where: { email },
    attributes: ["email", "contrasena"],
  });
  if (!user) {
    console.log({ error: "El usuario no existe" });
    return res.json({ error: "El usuario no existe" });
  }

  const contrasenaDB = user.dataValues.contrasena;

  if (!bcrypt.compareSync(contrasena, contrasenaDB)) {
    console.log({ error: "La contraseña es incorrecta" });
    return res.json({ error: "La contraseña es incorrecta" });
  }
  console.log({ islogged: "El usuario está loggeado" });

  res.json({ islogged: "El usuario está loggeado" });
};

export { registrarUsuario, iniciarSesion };
