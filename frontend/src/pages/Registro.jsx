import { Form, redirect } from "react-router-dom";
import FomRegistro from "../components/FormRegistro";
import { registrarUsuario } from "../../data/usuarios";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  if (
    Object.values(datos).includes("") ||
    datos.contrasena !== datos.repetir_contrasena
  ) {
    console.log("Detengo código");
    return null;
  }

  delete datos.repetir_contrasena;

  registrarUsuario(datos);
  return redirect("/auth/login");
}

const Registro = () => {
  return (
    <main className="container flex flex-col justify-center items-center my-20 mx-auto gap-10">
      {/* Registrarse */}

      <h2 className="text-5xl uppercase font-bold">CREA TU CUENTA</h2>

      <p className="text-3xl  text-center">
        Completa el formulario para ser parte del mundo de los funkos
      </p>

      <Form method="POST">
        <FomRegistro />

        <div className="flex flex-col-reverse md:flex-row gap-3 mt-10 mx-auto md:justify-evenly items-center max-w-[600px]">
          <input
            className="bg-red-500 border-2 border-black text-white  px-5 py-2 mx-3"
            type="submit"
            value="Enviar"
          />
          <div className=" flex gap-3 items-center">
            <input type="checkbox" />
            <p>
              Acepto{" "}
              <a
                className="text-cyan-600 hover:text-cyan-700 cursor-pointer"
                href="#"
              >
                términos y condiciones
              </a>
            </p>
          </div>
        </div>
      </Form>
    </main>
  );
};

export default Registro;
