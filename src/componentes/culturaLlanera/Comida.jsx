import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img16 from "../../assets/img16.jpg";

export default function Comida() {
  return (
    <div class="container text-center py-2 d-flex-fluid">
      <div class="row ">
        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">
          Comidas típicas de los llanos orientales
        </h5>

        <div class="col-6 py-2">
          <img src={img16} alt="Foto" class="card-img-top w-100 rounded-pill" />
        </div>

        <div class="col-6 py-1">
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">
            {" "}
            Quienes visitan los Llanos Orientales de Colombia no solo quedan
            sorprendidos por el paisaje, sino también por la gastronomía de la
            zona. Gran parte de la carne que se consume en el país y se exporta
            a otros países proviene de esta región, por lo que se espera que los
            platos típicos de la cultura llanera incluyan carnes de excelente
            calidad, los platos mas conocidos y pedidos son:
            <br />
            <ul>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Mamona
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Chiguiro asado
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Tungos Llaneros
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Pisillo
              </li>
              <li class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">
                Carne a la perra
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
