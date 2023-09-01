/* ----- HEADER para todas las páginas ----- */
var elem = document.getElementById("idheader");
const pagina1 = (window.location).toString()
if (pagina1.includes("index.html")) {
    /* Viene de index que está en la carpeta raiz */
    elem.innerHTML = `
    <nav class="navbar container">
        <picture class="navbar__logo">
            <a href="./index.html">
                <img src="./img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
        <ul class="navbar__menu">
            <li class="navbar__item with-submenu">
                <a class="navbar__link with-icon" href="./pages/shop/shop.html"><iconify-icon icon="tabler:chevron-down"></iconify-icon>SHOP</a>
                <ul class="submenu">
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Funkos</a>
                    </li>
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Remeras</a>
                    </li>
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Llaveros</a>
                    </li>
                </ul>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/contact.html">CONTACTO</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/login.html">LOGIN</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__cart" href="./pages/shop/cart.html">
                    <img src="./img/icons/cart-icon.svg" alt="icono de carrito"></img>
                </a>
            </li>
        </ul>
    </nav>
`
}else {
    /* Viene de otra pagina que no es index y está en /pages */
    elem.innerHTML = `
    <nav class="navbar container">
        <picture class="navbar__logo">
            <a href="../../index.html">
                <img src="../../img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
        <ul class="navbar__menu">
            <li class="navbar__item with-submenu">
                <a class="navbar__link with-icon" href="../../pages/shop/shop.html"><iconify-icon icon="tabler:chevron-down"></iconify-icon>SHOP</a>
                <ul class="submenu">
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Funkos</a>
                    </li>
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Remeras</a>
                    </li>
                    <li class="submenu__item">
                        <a href="" class="submenu__link">Llaveros</a>
                    </li>
                </ul>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="../../pages/shop/contact.html">CONTACTO</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="../../pages/shop/login.html">LOGIN</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__cart" href="../../pages/shop/cart.html">
                    <img src="../../img/icons/cart-icon.svg" alt="icono de carrito"></img>
                </a>
            </li>
        </ul>
    </nav>
`
}


/* ----- FOOTER para todas las páginas ----- */
var elem = document.getElementById("idfooter");
const pagina2 = (window.location).toString()
if (pagina2.includes("index.html")) {
    /* DE INDEX */
    elem.innerHTML = `
    <nav class="navbar container">
        <ul class="navbar__item">
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/shop.html">SHOP</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/register.html">REGISTRARSE</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/login.html">INGRESAR</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./pages/shop/contact.html">CONTACTO</a>
            </li>
        </ul>
        <picture>
            <a href="./index.html">
                <img src="./img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
    </nav>
    <p class="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
    `                
}else {
    /* DE OTRA */
    elem.innerHTML = `
    <nav class="navbar container">
        <ul class="navbar__item">
            <li class="navbar__item">
                <a class="navbar__link" href="./shop.html">SHOP</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./register.html">REGISTRARSE</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./login.html">INGRESAR</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="./contact.html">CONTACTO</a>
            </li>
        </ul>
        <picture>
            <a href="../../index.html">
                <img src="../../img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
    </nav>
    <p class="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
    `
}