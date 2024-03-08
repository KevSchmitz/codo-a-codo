import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <header className="bg-zinc-700">
      <nav className="container flex justify-between mx-auto py-5 items-center">
        <Link to="/">
          <picture>
            <img
              src="/img/branding/logo_light_horizontal.svg"
              alt="Isologotipo de la marca Funkoshop"
            />
          </picture>
        </Link>
        <ul className="flex gap-5 items-center text-white">
          <li
            onMouseOver={() => setIsHidden(false)}
            onMouseOut={() => setIsHidden(true)}
          >
            <Link
              className=" hover:bg-red-500 py-2 px-4 transition-colors"
              to="/shop"
            >
              <iconify-icon icon="tabler:chevron-down"></iconify-icon>SHOP
            </Link>
            <ul
              className={`flex flex-col absolute bg-zinc-700 uppercase mt-1 z-10 ${
                isHidden && "hidden"
              }`}
            >
              <li className="hover:bg-red-500 py-2 px-4 transition-colors">
                <Link to="">Funkos</Link>
              </li>
              <li className="hover:bg-red-500 py-2 px-4 transition-colors">
                <Link to="">Remeras</Link>
              </li>
              <li className="hover:bg-red-500 py-2 px-4 transition-colors">
                <Link to="">Llaveros</Link>
              </li>
            </ul>
          </li>
          <li className="hover:bg-red-500 py-2 px-4 transition-colors">
            <Link className="navbar__link" to="/auth/login">
              LOGIN
            </Link>
          </li>
          <li className="hover:bg-red-500 py-2 px-4 transition-colors">
            <Link to="/shop/cart">
              <img src="/img/icons/cart-icon.svg" alt="icono de carrito"></img>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
