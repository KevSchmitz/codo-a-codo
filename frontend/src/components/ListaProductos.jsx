import Producto from "./Producto";

const ListaProductos = ({ productos }) => {
  return (
    <ul className="flex flex-wrap gap-10 justify-center basis-5/6">
      {productos?.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </ul>
  );
};

export default ListaProductos;
