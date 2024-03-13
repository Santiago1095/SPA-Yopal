import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img5 from "../../assets/img5.jpg";

export default function Hoteles() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 ">
      <div class="row">
        <h5 class="text-center py-2 fs-1 fst-italic text-dark">Hoteles</h5>

        <div class="rounded-start-5 col-6 py-2 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-6 fst-italic bg-primary-subtle">
            Yopal cuenta con una gran cantidad de hoteles, la mayoría de ellos
            creados en la década de los 90 con el fin de servir a la creciente
            industria petrolera. Sin embargo, en los últimos años se ha dado un
            interés por parte de grandes cadenas hoteleras nacionales e
            internacionales que buscan establecerse en la ciudad:
            <br /> <br />
            <ul>
              <li> Hotel Camoruco</li>
              <li> Granada Plaza Hotel </li>
              <li> Hotel Atalayas </li>
              <li> Hotel Estelar </li>
              <li> Hotel GHL Style </li>
              <li> Hotel Holiday Inn </li>
              <li> Hotel El Rey David</li>
            </ul>
          </p>

          <Link to="/home" class="btn btn-success ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="rounded-end-5 col-6 py-5 bg-primary-subtle">
          <img src={img5} alt="Foto" className=" w-100  rounded-5" />
        </div>
      </div>
    </div>
  );
}
