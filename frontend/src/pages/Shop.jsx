import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { obtenerProductos } from "../../data/productos";
import ListaProductos from "../components/ListaProductos";
import ShopFilter from "../components/ShopFilter";

export function loader() {
  const productos = obtenerProductos();
  return productos;
}

const Shop = () => {
  const productos = useLoaderData();

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const handleFilter = (prods) => {
    setProductosFiltrados(prods);
  };

  return (
    <main className="container flex mx-auto my-10">
      <ShopFilter productos={productos} handleFilter={handleFilter} />
      <ListaProductos productos={productosFiltrados} />
    </main>
  );
};

export default Shop;
