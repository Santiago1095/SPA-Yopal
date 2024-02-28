import { Link } from 'react-router-dom';
import React from "react";
import '../../App.js'
import img1 from '../../assets/img1.jpg'


export default function Geografía() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 " >

      <div class="row">

        <h5 class="text-center py-2 fs-1 fst-italic text-dark">Geografía</h5>

        <div class="rounded-start-5 col-6 py-5 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-5 fst-italic bg-primary-subtle">Yopal es la ciudad capital del departamento colombiano de Casanare, ubicada cerca del río Cravo Sur, en el piedemonte de la cordillera Oriental. Por su topografía el municipio presenta tres pisos térmicos, cuyas áreas son: Cálido 1906 km², Medio 106 km² y Frío 25 km²
          </p>
          <Link to="/home" class="btn btn-success ">Volver a la pagina principal</Link>

        </div>

        <div class="rounded-end-5 col-6 py-5 bg-primary-subtle">
          <img src={img1} alt="Foto" className=' w-100  rounded-5' />
        </div>

      </div>
    </div>

  )
}
