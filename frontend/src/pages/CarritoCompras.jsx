import React from "react";
import Carrito from "../components/Carrito";
import { Link } from "react-router-dom";

const CarritoCompras = () => {
  return (
    <main className="container md:w-2/3 xl:w-1/2 mx-auto my-10">
      <h2 className=" inline-block border-b-4 border-b-red-500 text-4xl pb-1 uppercase font-bold">
        Carrito de Compras
      </h2>

      <Carrito />

      <section className="flex justify-center md:justify-end">
        <div className="flex flex-col justify-end items-end text-end md:w-1/2">
          <h2 className="text-5xl uppercase font-bold border-b-red-500 border-b-4 pb-3 mb-5">
            Resumen
          </h2>
          <div className="w-80 py-3 px-5 shadow">
            <p className="flex justify-between uppercase font-bold text-xl">
              Cantidad
              <span className="text-gray-400">3</span>
            </p>
            <p className="flex justify-between uppercase font-bold text-xl">
              SubTotal
              <span className="text-gray-400">$9000</span>
            </p>
            <p className="flex justify-between uppercase font-bold text-xl border-b-red-500 border-b-4 pb-3 mb-2">
              Envio
              <span className="text-gray-400">$1000</span>
            </p>
            <p className="flex justify-between uppercase font-bold text-3xl">
              Total <span>$10000</span>
            </p>
          </div>
          <Link
            className="w-full bg-red-500 mt-10 px-5 py-2 text-white text-2xl uppercase font-bold text-center"
            to={""}
          >
            Ir a pagar
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CarritoCompras;
