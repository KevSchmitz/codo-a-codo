import { Form, Link, redirect, useParams } from "react-router-dom";
import { eliminarCliente } from "../../data/productos";

export async function action({ params }) {
  eliminarCliente(params.id);
  return redirect("/admin");
}

const EliminarObjeto = () => {
  const params = useParams();

  return (
    <main className="container mx-auto my-10">
      <div className="mx-auto w-[95%] sm:w-3/4 xl:w-1/2 mt-10 text-xl">
        <p className="text-center mb-5">
          ¿Está seguro que desea eliminar el objeto? Una vez eliminado no podrá
          recuperarlo
        </p>
        <div className="flex justify-center items-center gap-10">
          <Link
            className="border border-zinc-700 px-3 py-1  rounded-md"
            to={"/admin"}
          >
            Cancelar
          </Link>

          <Form method="POST" action={`/admin/delete/${params.id}`}>
            <button
              type="submit"
              className="bg-red-500 px-3 py-1 font-bold  text-white rounded-md"
            >
              Eliminar
            </button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default EliminarObjeto;
