import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img15 from "../../assets/img15.jpg";

export default function Instrumentos() {
  return (
    <div class="container text-center py-2 d-flex-fluid">
      <div class="row ">
        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">
          Instrumentos Llaneros
        </h5>

        <div class="col-6 py-5">
          <img src={img15} alt="Foto" class="card w-100 rounded-pill" />
        </div>

        <div class="col-6 py-1">
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">
            Hasta la década de los 1950, en los llanos de Arauca se tocaba con
            bandolín, cuatro y maracas; en Casanare, se hacía con un par de
            tiples; hacia el Meta, la instrumentación era de tiple y bandola.
            Todos estos instrumentos de cuerda han sido reemplazados por el
            arpa, introducida en los años 1960 cuando llegó a Villavicencio el
            compositor araucano David Parales Bello, quien había vivido en Apure
            <br />
            <ul>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Cuatro: Instrumento de cuatro cuerdas y entrastadura entre
                catorce y dieciséis trastes.
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Arpa: Instrumento diatónico de treinta o treinta y tres cuerdas
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Maracas o Capachos. Instrumento de percusión conformado por una
                calabaza con semillas en su interior. La calabaza se sujeta por
                un mango que sirve para agitar el calabazo.
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Bandola o Violín Bandola.
              </li>
            </ul>
          </p>
          <Link to="/home" class="btn btn-secondary">
            Volver a la pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
}
