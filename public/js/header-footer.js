/* ----- HEADER para todas las páginas ----- */
var ruta1 = "";
var ruta2 = "";
var elem = document.getElementById("idheader");
const pagina1 = (window.location).toString()
if (pagina1.includes("index.html")) {
    /* Viene de index que está en la carpeta raiz */
    ruta1 = "./"
    ruta2 = "./pages/"

}else {
    /* Viene de otra pagina que no es index y está en /pages */
    ruta1 = "../"
    ruta2 = "./"
}
elem.innerHTML = `
    <nav class="navbar container">
        <picture class="navbar__logo">
            <a href="` + ruta1 + `home">
                <img src="` + ruta1 + `img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
        <ul class="navbar__menu">
            <li class="navbar__item with-submenu">
                <a class="navbar__link with-icon" href="` + ruta2 + `shop"><iconify-icon icon="tabler:chevron-down"></iconify-icon>SHOP</a>
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
                <a class="navbar__link" href="` + ruta2 + `contact">CONTACTO</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="` + ruta2 + `login">LOGIN</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__cart" href="` + ruta2 + `cart">
                    <img src="` + ruta1 + `img/icons/cart-icon.svg" alt="icono de carrito"></img>
                </a>
            </li>
        </ul>
    </nav>
`



/* ----- FOOTER para todas las páginas ----- */
var elem = document.getElementById("idfooter");
const pagina2 = (window.location).toString()
if (pagina2.includes("index.html")) {
    /* DE INDEX */
    ruta1 = "./"
    ruta2 = "./pages/"
}else {
    /* DE OTRA */
    ruta1 = "../"
    ruta2 = "./"    
}
elem.innerHTML = `
    <nav class="navbar container">
        <ul class="navbar__item">
            <li class="navbar__item">
                <a class="navbar__link" href="` + ruta2 + `shop">SHOP</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="` + ruta2 + `registrarse">REGISTRARSE</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="` + ruta2 + `login">INGRESAR</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="` + ruta2 + `contact">CONTACTO</a>
            </li>
        </ul>
        <picture>
            <a href="` + ruta1 + `home">
                <img src="` + ruta1 + `img/branding/logo_light_horizontal.svg" alt="Isologoyipo de la marca Funkoshop">
            </a>
        </picture>
    </nav>
    <p class="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
`                