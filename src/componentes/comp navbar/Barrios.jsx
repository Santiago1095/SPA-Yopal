import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img4 from "../../assets/img4.jpg";

export default function Barrios() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 ">
      <div class="row">
        <h5 class="text-center py-2 fs-1 fst-italic text-dark">Barrios</h5>

        <div class="rounded-start-5 col-6 py-2 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-6 fst-italic bg-primary-subtle">
            La Cabecera municipal de Yopal se encuentra dividida en siete
            comunas, las cuales comprenden 124 barrios:
            <br /> <br />
            <ul>
              <li> Comuna I Ciro Reina </li>

              <li> Comuna II Calixto Zambrano </li>

              <li> Comuna III Clelia Riveros de Prieto </li>

              <li> Comuna IV Ciudad Campiña </li>

              <li> Comuna V Javier Manuel Vargas Granados </li>

              <li> Comuna VI Llano Lindo </li>

              <li> Comuna VII Juan Nepomuceno Moreno </li>
            </ul>
          </p>

          <Link to="/home" class="btn btn-success ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="rounded-end-5 col-6 py-5 bg-primary-subtle">
          <img src={img4} alt="Foto" className=" w-100  rounded-5" />
        </div>
      </div>
    </div>
  );
}
