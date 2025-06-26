const navbar_container = document.getElementById("navbar-container");
const footer_container = document.getElementById("footer-container");

console.log("se ejecuta navbar.js");
let currentPage = window.location.pathname;
currentPage = currentPage.substring(currentPage.lastIndexOf("/") + 1);
console.log(currentPage);

const navbarHTML = `
   <nav class="navbar bg-white border navbar-expand-lg">
          <div class="container position-relative">
            <a href="index.html" class="navbar-logo">
              <img class="navbar-logo" src="assetts/logo-2.png" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="mx-4 navbar-nav">
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage == "/" ||
                    (currentPage == "index.html" && "active fw-bold")
                  } " href="index.html">Inicio </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage == "services.html" && "active fw-bold"
                  } " href="services.html">Servicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage == "contacts.html" && "active fw-bold"
                  } " href="contacts.html">Contactos</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link ${
                      currentPage == "clients.html" && "active fw-bold"
                    } "
                    href="clients.html"
                    >Clientes</a
                  >
                </li>
                  <li class="nav-item">
                  <a
                    class="nav-link ${
                      currentPage == "calculator.html" && " active fw-bold"
                    } "
                    href="calculator.html"
                    >Calcular costos</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
  `;

navbar_container.innerHTML = navbarHTML;

const footerHTML = `
<div class="row position-relative footer py-3">
              <div class="col-6 align-items-center justify-content-start">
                <h6 class="fw-light">Plantitas Felices ©</h6>
              </div>
              <div
                class="col-6 justify-content-end align-items-center d-flex gap-2"
              >
                <h6 class="fw-light h-100 d-flex align-items-center">
                 ¡Seguinos en Redes!
                </h6>
                <a class="align-items-center h-100 d-flex"
                >
                  <img
                  class="align-items-center"
                    src="assetts/icon-facebook.jpg"
                    alt="Icono de Facebook "
                  />
                </a>
              </div>
            </div>
`;
footer_container.innerHTML = footerHTML;
