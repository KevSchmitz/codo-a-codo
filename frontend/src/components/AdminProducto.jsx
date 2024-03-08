import { Link } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
}

const AdminProducto = ({ index, producto }) => {
  const { id, sku, nombre, licencia } = producto;
  return (
    <tr className="flex gap-3 text-center">
      <td className="basis-1/12">{index + 1}</td>
      <td className="basis-3/12">{sku}</td>
      <td className="basis-4/12">{nombre}</td>
      <td className="basis-2/12 uppercase">{licencia.nombre}</td>
      <td className="basis-1/12">
        <Link to={`edit/${id}`}>
          <img
            className="mx-auto"
            src="/img/icons/edit_pencil.svg"
            alt="ícono lápiz para edición"
          />
        </Link>
      </td>
      <td className="basis-1/12">
        <Link to={`/admin/delete/${id}`}>
          <img
            className="mx-auto"
            src="/img/icons/delete_trash.svg"
            alt="ícono basura para eliminar"
          />
        </Link>
      </td>
    </tr>
  );
};

export default AdminProducto;
