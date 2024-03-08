import React from "react";
import { Link } from "react-router-dom";

const Coleccion = ({ coleccion }) => {
  const { nombre, licencia, descripcion, imagenCara } = coleccion;
  return (
    <>
      <li className="flex flex-col-reverse md:flex-row md:even:flex-row-reverse justify-center items-center my-10">
        <div>
          <h3 className="mb-5 text-5xl font-bold uppercase">
            {licencia.nombre}
          </h3>
          <p className="border-b-red-500 border-b-2 pb-4 mb-6 text-xl">
            {descripcion}
          </p>
          <Link
            to={`/shop/${licencia.nombre.toLowerCase()}`}
            className=" bg-gray-700 py-3 px-8 uppercase text-white rounded-3xl"
          >
            Ver Coleccion
          </Link>
        </div>
        <div>
          <img src={`${imagenCara}`} alt={nombre} />
        </div>
      </li>
    </>
  );
};

export default Coleccion;
