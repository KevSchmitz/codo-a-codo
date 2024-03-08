import multer from "multer";
import { resolve } from "path";
import { separarEnGuiones } from "../helpers/helpers.js";
import { Licencia } from "../src/models/Licencia.js";

const destination = async (req, file, cb) => {
  const licencia = await Licencia.findByPk(req.body.licenciaId);
  cb(
    null,
    resolve() + `/../frontend/public/img/${separarEnGuiones(licencia.nombre)}`
  );
};

const filename = (req, file, cb) => {
  cb(null, Date.now() + file.originalname);
};

const config = { destination, filename };
const storage = multer.diskStorage(config);

const upload = multer({ storage });

export default upload;
