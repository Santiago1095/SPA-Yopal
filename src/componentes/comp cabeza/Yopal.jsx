import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  Link,
} from "react-router-dom";
import React from "react";
import "../../App.js";
import img10 from "../../assets/img10.jpg";

export default function Yopal() {
  return (
    <div class="container text-center py-2 d-flex-fluid">
      <div class="row ">
        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">
          Yopal
        </h5>

        <div class="col-6 py-5">
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">
            Yopal es un municipio colombiano, capital del departamento de
            Casanare. Su extensión territorial es de 2595 kilómetros cuadrados,
            y se sitúa a 317 kilómetros del distrito capital de Bogotá. Fundada
            por colonos boyacenses en 1915 es una de las capitales
            departamentales más jóvenes de que registra más rápido crecimiento
            poblacional a nivel nacional, en especial después de la separación
            de Casanare del departamento de Boyacá
          </p>
          <Link to="/home" class="btn btn-secondary ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="col-6 py-5">
          <img src={img10} alt="Foto" className=" w-75 rounded-pill" />
        </div>
      </div>
    </div>
  );
}
