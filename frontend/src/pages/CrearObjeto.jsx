import { Form, useLoaderData } from "react-router-dom";
import FormCrearObjeto from "../components/FormCrearObjeto";
import { crearNuevoObjeto, obtenerPropiedades } from "../../data/productos";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  if (
    Object.values(datos).includes("") ||
    Object.values(datos).includes("Seleccionar")
  ) {
    console.log("TODOS LOS CAMPOS SON REQUERIDOS");
    return;
  }

  await crearNuevoObjeto(datos);

  return null;
}

export async function loader() {
  const propiedades = await obtenerPropiedades();
  return propiedades;
}

const CrearObjeto = () => {
  const propiedades = useLoaderData();

  return (
    <main className="container mx-auto my-10">
      <h1 className="text-4xl font-bold uppercase text-center">
        Crear nuevo item
      </h1>
      <Form method="POST" encType="multipart/form-data">
        <FormCrearObjeto propiedades={propiedades} />
        <div className="flex flex-col gap-3 sm:flex-row justify-evenly mt-6">
          <input
            className="bg-red-500 border-2 border-black text-white px-5 py-2 mx-3"
            type="submit"
            value={"Agregar Producto"}
          />
          <button className="bg-red-500 border-2 border-black text-white px-5 py-2 mx-3">
            Limpiar
          </button>
        </div>
      </Form>
    </main>
  );
};

export default CrearObjeto;
