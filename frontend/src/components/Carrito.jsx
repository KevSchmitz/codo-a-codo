import ObjetoCarrito from "./ObjetoCarrito";

const Carrito = () => {
  return (
    <section className="my-10">
      <table className="w-full">
        <thead>
          <tr className="flex text-xl font-bold py-2 px-5 shadow-md rounded-xl mb-5">
            <td className="basis-6/12 text-center">Detalle del Producto</td>
            <td className="basis-3/12 text-center">Cantidad</td>
            <td className="basis-2/12 text-center">Total</td>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-5">
          <ObjetoCarrito />
        </tbody>
      </table>
    </section>
  );
};

export default Carrito;
