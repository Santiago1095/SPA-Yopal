import { Link, } from 'react-router-dom';
import React from "react";
import '../../App.js'
import img12 from '../../assets/img12.jpg'


export default function Historia() {
  return (
    <div class="container text-center py-2 d-flex-fluid">

      <div class="row ">

        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">Historia</h5>

        <div class="col-6 py-5">
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">Antes de la conquista, en el territorio actual de Yopal vivían tribus pertenecientes a los indígenas achaguas. Estos indígenas consumían la yopa, sustancia alucinógena extraída del árbol de yopo, que abundaba en las riberas del río Cravo Sur. Los achaguas, además, cultivaban y consumían yuca, piña y semillas, e intercambiaban productos con las tribus de la cordillera.
            <br /> <br />
            Más adelante, hacia 1650, los misioneros jesuitas llegaron a Casanare, algunos de los cuales se establecieron en haciendas como Caribabare, Cravo Sur y Tocaría, adiestrando a los indios y utilizándolos como mano de obra. Durante el período de influencia jesuita, surgieron pequeñas ciudades de existencia efímera, como San José de Cravo y La Purísima Concepción.
          </p>
          <Link to="/home" class="btn btn-secondary ">Volver a la pagina principal</Link>
        </div>
        <div class="col-6 py-5">
          <img src={img12} alt="Foto" className=' w-100 rounded-pill' />
        </div>

      </div>
    </div>

  )
}