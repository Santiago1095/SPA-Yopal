import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img3 from "../../assets/img3.jpg";

export default function CentrosComerciales() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 ">
      <div class="row">
        <h5 class="text-center py-2 fs-1 fst-italic text-dark">
          Centros Comerciales
        </h5>

        <div class="rounded-start-5 col-6 py-2 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-6 fst-italic bg-primary-subtle">
            Yopal cuenta con varios centros comerciales, algunos de ellos de
            gran formato:
            <br />
            <ul>
              <li>
                Centro Comercial Gran Plaza Alcaraván: ancla Almacenes Éxito,
                semianclas Royal Films y Happy City. Hotel de la cadena GHL
                Style y cervecería Beer Station.
              </li>

              <li>
                Centro Comercial Morichal Plaza: anclas Alkosto, salas de cine
                Cinelandia Multiplex, y un Hotel en construcción.
              </li>

              <li>
                Centro Comercial El Hobo: ancla Almacenes Paraíso. Incluye
                locales comerciales, oficinas, cancha deportiva sintética y zona
                de juegos.
              </li>

              <li>
                Centro Comercial Unicentro: almacén ancla Hipermercados Jumbo,
                semianclas, Game Box y Cinemark, proyecto de vivienda
                Multicentro Yopal.
              </li>
            </ul>
          </p>

          <Link to="/home" class="btn btn-success ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="rounded-end-5 col-6 py-5 bg-primary-subtle">
          <img src={img3} alt="Foto" className=" w-100  rounded-5" />
        </div>
      </div>
    </div>
  );
}
