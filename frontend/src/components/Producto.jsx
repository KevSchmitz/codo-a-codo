import { useState } from "react";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
  const { imagenCara, imagenDorso, categoria, nombre, precio, id } = producto;
  const [isHover, setIsHover] = useState(false);

  return (
    <li>
      <Link
        className="transition-all"
        to={`/shop/item/${id}`}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <div className="w-60">
          <img
            className="h-60 w-fit mx-auto"
            loading="lazy"
            src={isHover ? imagenDorso : imagenCara}
            alt={nombre}
          />
        </div>
        <p className="uppercase">{categoria.nombre}</p>
        <h2 className="text-xl uppercase font-bold">{nombre}</h2>
        <p>$ {precio}</p>
        <p className="text-sm text-cyan-500 font-bold">cuotas sin interes</p>
      </Link>
    </li>
  );
};

export default Producto;
