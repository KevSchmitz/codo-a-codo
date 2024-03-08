import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 py-10">
      <nav className="container flex mx-auto items-center justify-between text-white">
        <ul className="flex flex-col gap-4 mb-5">
          <li className="navbar__item">
            <a className="navbar__link" href="/shop">
              SHOP
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/auth/register">
              REGISTRARSE
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/auth/login">
              INGRESAR
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/contact">
              CONTACTO
            </a>
          </li>
        </ul>
        <picture>
          <Link to="/">
            <img
              src="/img/branding/logo_light_horizontal.svg"
              alt="Isologoyipo de la marca Funkoshop"
            />
          </Link>
        </picture>
      </nav>
      <p className="text-center text-white">
        All rights reserved 2023 - Funkoshop &copy;
      </p>
    </footer>
  );
};

export default Footer;
