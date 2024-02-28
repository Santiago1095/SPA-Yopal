import { BrowserRouter, Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import React from "react";
import '../../App.js'
import img17 from '../../assets/img17.jpg'


export default function Turistico() {
  return (
    <div class="container text-center py-2 d-flex-fluid" >

      <div class="row ">
        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill ">Atractivos Turísticos de Yopal</h5>

        <div class="col-6 py-5" >
          <img src={img17} alt="Foto" class='card-img-top w-100 rounded-pill' />
        </div>


        <div class="col-6 py-5">
        <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">Yopal se resalta como un territorio de abundancia, en el que la población podría soñar, es por eso que en Yopal Casanare buscan que los paisajes son uno de los principales atractivos que tiene el departamento, por lo que sumado a los aspectos naturales que ofrece este territorio y hermosos atardeceres consoliden al municipio como un lugar al que las personas en el país aspiren a conocer. </p>
            <ul>
              <ul class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">Mirador de la Virgen de Manare</ul>
              <ul class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">Piscina Natural La Aguatoca</ul>
              <ul class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">Catedral San José</ul>
              <ul class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">Parque Temático Historias de Piedra</ul>
              <ul class="card text-bg-light m-3 border border-light text-start fs-6 fst-italic">Museo Centro Histórico Del Oriente</ul>
            </ul>
          <Link to="/home" class="btn btn-secondary">Volver a la pagina principal</Link>
        </div>
      </div>

    </div>



  )
}