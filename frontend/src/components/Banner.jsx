import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[url('/img/funkos-banner.webp')] h-[400px] bg-cover bg-fixed bg-top bg-no-repeat">
      <div className="backdrop-blur-sm w-full h-full flex items-center">
        <div className="container mx-auto text-white ">
          <h2 className="text-4xl font-bold mb-5">Nuevos Ingresos</h2>
          <p className="mb-10">Descubrí el próximo Funko Pop de tu colección</p>
          <Link
            to="/shop"
            className="bg-white py-3 px-20 rounded-3xl text-black hover:bg-red-500"
          >
            SHOP
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
