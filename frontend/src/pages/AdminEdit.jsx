import React from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";
import FormCrearObjeto from "../components/FormCrearObjeto";
import {
  actualizarDatosProducto,
  obtenerProductoAdminEdit,
  obtenerPropiedades,
} from "../../data/productos";

export async function loader({ params }) {
  const id = params.id;
  const producto = await obtenerProductoAdminEdit(id);
  const propiedades = await obtenerPropiedades();
  return { producto, propiedades };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const id = params.id;

  if (
    Object.values(datos).includes("") ||
    Object.values(datos).includes("Seleccionar")
  ) {
    console.log("TODOS LOS CAMPOS SON REQUERIDOS");
    return;
  }

  await actualizarDatosProducto(id, datos);

  return null;
}

const AdminEdit = () => {
  const params = useParams();
  const { producto, propiedades } = useLoaderData();
  return (
    <main className="container mx-auto">
      <Form method="POST" encType="multipart/form-data">
        <FormCrearObjeto
          params={params}
          producto={producto}
          propiedades={propiedades}
        />
        <div className="flex flex-col gap-3 sm:flex-row justify-evenly mt-6 mb-10">
          <input
            className="bg-red-500 border-2 border-black text-white px-5 py-2 mx-3"
            type="submit"
            value={"Guardar Cambios"}
          />
          <button className="bg-red-500 border-2 border-black text-white px-5 py-2 mx-3">
            Limpiar
          </button>
        </div>
      </Form>
    </main>
  );
};

export default AdminEdit;
