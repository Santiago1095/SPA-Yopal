import { BrowserRouter, Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import React from "react";
import '../../App.js'
import img14 from '../../assets/img14.jpg'


export default function Joropo() {
  return (

    <div class="container text-center py-2 d-flex-fluid" >

      <div class="row ">
      <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">Joropo</h5>

        <div class="col-6 py-5" >
          <img src={img14} alt="Foto" class='card-img-top w-75 rounded-pill' />
        </div>

        <div class="col-6 py-5">
         
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">El joropo es un género musical y danza tradicional de Venezuela y Colombia. Su diversidad se manifiesta en distintas tipologías subregionales. Entre ellas cabe mencionar el joropo oriental, el joropo central, el joropo andino y el golpe larense en Venezuela; además del joropo llanero y los cantos de trabajo de los llanos en Venezuela y Colombia, En 2017, la Unesco incluyó los cantos de arreo y ordeño, en la Lista Representativa de Patrimonio Cultural Inmaterial del mundo</p>
          <Link to="/home" class="btn btn-secondary">Volver a la pagina principal</Link>
        </div>
      </div>

    </div>


  )
}