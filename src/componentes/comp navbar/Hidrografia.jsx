import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img2 from "../../assets/img2.jpg";

export default function Hidrografia() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 ">
      <div class="row">
        <h5 class="text-center py-2 fs-1 fst-italic text-dark">Hidrografía</h5>

        <div class="rounded-start-5 col-6 py-4 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-6 fst-italic bg-primary-subtle">
            El municipio se encuentra inmerso dentro de dos (2) grandes cuencas
            hidrográficas pertenecientes al río Charte y el Cravo Sur; Cuenca
            del río Cravo Sur, el Río Cravo Sur nace en la cordillera oriental
            en territorio del municipio de Mongua, Boyacá, bañando a los
            municipios de Mongua y Labranzagrande en el departamento de Boyacá,
            los municipios de Yopal, San Luis de Palenque y Orocué en el
            departamento de Casanare, presentando un tramo navegable de 138 km,
            desde el corregimiento del Algarrobo en Orocué, hasta su
            desembocadura en el río Meta.
          </p>
          <Link to="/home" class="btn btn-success ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="rounded-end-5 col-6 py-4 bg-primary-subtle">
          <img src={img2} alt="Foto" className=" w-100  rounded-5" />
        </div>
      </div>
    </div>
  );
}
