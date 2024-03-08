import AdminProducto from "./AdminProducto";

const AdminListaProductos = ({ productos }) => {
  return (
    <tbody>
      {productos.map((producto, index) => (
        <AdminProducto key={producto.id} index={index} producto={producto} />
      ))}
    </tbody>
  );
};

export default AdminListaProductos;
