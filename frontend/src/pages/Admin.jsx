import { Link, useLoaderData } from "react-router-dom";
import AdminListaProductos from "../components/AdminListaProductos";
import { obtenerProductosAdminFront } from "../../data/productos";

export async function loader() {
  const productos = await obtenerProductosAdminFront();
  return productos;
}

const Admin = () => {
  const productos = useLoaderData();

  return (
    <main className="container mx-auto my-10">
      <div className="flex gap-5 mb-6">
        <img src="/img/icons/search_icon.svg" alt="icono lupa" />

        <input
          className="border-2 border-black rounded-xl px-2 w-5/6 md:w-1/2 xl:w-1/3"
          type="text"
          name="search"
          placeholder="código, nombre o categoría"
        />
      </div>

      <div className="flex justify-between text-3xl font-bold mb-6">
        <h1>LISTADO DE PRODUCTOS</h1>

        <div className="flex gap-3 items-center">
          <p>AGREGAR</p>
          <Link className="bg-red-500 py-1 px-2  text-white" to="/admin/create">
            +
          </Link>
        </div>
      </div>

      <table className="w-full">
        <thead className="text-2xl font-bold">
          <tr className="flex gap-3 mb-3">
            <th className="basis-1/12">ID</th>
            <th className="basis-3/12">Código</th>
            <th className="basis-4/12">Nombre del Producto</th>
            <th className="basis-2/12">Categoría</th>
            <th className="basis-1/12"></th>
            <th className="basis-1/12"></th>
          </tr>
        </thead>
        <AdminListaProductos productos={productos} />
      </table>
    </main>
  );
};

export default Admin;
