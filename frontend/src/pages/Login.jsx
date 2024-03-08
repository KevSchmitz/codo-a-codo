import { Form, Link, redirect } from "react-router-dom";
import { iniciarSesion } from "../../data/usuarios";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const loggin = await iniciarSesion(datos);
  return loggin.data.error ? null : redirect("/");
}

const Login = () => {
  return (
    <main className="container flex flex-col justify-center items-center my-20 mx-auto gap-10">
      <h2 className="text-5xl uppercase font-bold">Ingresar a mi cuenta</h2>

      <Form method="POST">
        <div className="flex flex-col gap-10 text-2xl justify-center">
          <div className="flex justify-between gap-4">
            <label className="text-left" htmlFor="email">
              Email:
            </label>
            <input
              className="border-b-2 border-b-red-500 text-center"
              type="text"
              placeholder="Ingrese su Email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex justify-between gap-4">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              className="border-b-2 border-b-red-500 text-center"
              type="password"
              placeholder="Ingrese su Contraseña"
              name="contrasena"
              id="contrasena"
            />
          </div>
          <div className="flex justify-around items-center text-xl ">
            <input
              className="py-3 px-8 bg-red-500 text-white hover:cursor-pointer hover:bg-red-600 hover:shadow-md"
              type="submit"
              value={"Ingresar"}
            />
            <div className="flex gap-3">
              <input type="checkbox" name="recordarme" />
              <label htmlFor="recordarme">Recordarme</label>
            </div>
          </div>
        </div>
      </Form>
      <Link className="hover:text-red-500 hover:border-b-[1px] hover:border-b-red-500">
        Olvide mi contrasena
      </Link>
    </main>
  );
};

export default Login;
