import { Form, useActionData, useLoaderData } from "react-router-dom";
import {
  agregarACarrito,
  obtenerProductoDetail,
} from "../../data/productos.js";
import { useEffect, useState } from "react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const { id } = params;
  const { counter } = datos;

  await agregarACarrito(id, counter);

  return null;
}

export async function loader({ params }) {
  const id = params.id;
  const producto = await obtenerProductoDetail(id);
  const carritoLS = JSON.parse(localStorage.getItem("carrito"));
  const productoCarrito = carritoLS.find(
    (producto) => producto.id === Number(id)
  );
  return { producto, productoCarrito };
}

const ProductoView = () => {
  const {
    categoria,
    cuotas,
    descripcion,
    imagenCara,
    licencia,
    nombre,
    precio,
    stock,
  } = useLoaderData().producto;

  const [counter, setCounter] = useState(0);
  const { cantidad } = useLoaderData().productoCarrito ?? counter;

  useEffect(() => {
    if (cantidad) setCounter(cantidad);
  }, []);

  return (
    <main className="container mx-auto my-10">
      <div className="flex flex-col gap-3 md:flex-row items-center justify-center max-w-7xl">
        <picture className="md:basis-1/2">
          <img
            className="mx-auto"
            loading="lazy"
            src={imagenCara}
            alt="Nombre producto"
          />
        </picture>

        <div className="md:basis-1/2 flex flex-col gap-3">
          <p className="uppercase">{categoria}</p>
          <p className="text-2xl font-bold uppercase">{nombre}</p>
          <p className="text-xl uppercase">{licencia}</p>
          <p>{descripcion}</p>
          <p className="text-3xl">$ {precio.toFixed(2)}</p>

          <Form method="POST">
            <div className="flex gap-3 max-w-md">
              <input
                onChange={() => {}}
                className="basis-2/6 w-full text-center text-xl border-2"
                type="number"
                name="counter"
                value={counter}
              />
              <div className="flex flex-col basis-1/6 w-full gap-2">
                <button
                  type="button"
                  onClick={() => counter < stock && setCounter(counter + 1)}
                  className="bg-black text-white mx-6 md:mx-4"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => counter > 0 && setCounter(counter - 1)}
                  className="bg-black text-white mx-6 md:mx-4"
                >
                  -
                </button>
              </div>

              <input
                className="basis-3/6 bg-red-500 hover:bg-red-600 text-white m-1 cursor-pointer"
                type="submit"
                value="Agregar al Carrito"
              />
            </div>
          </Form>

          <p>
            <button>Ver métodos de pago</button> -{" "}
            <span className="font-bold uppercase">
              {cuotas} cuotas sin interés
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductoView;
