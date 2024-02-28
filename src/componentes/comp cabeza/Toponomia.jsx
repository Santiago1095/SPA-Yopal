import {Link } from 'react-router-dom';
import React from "react";
import '../../App.js'
import img11 from '../../assets/img11.jpg'


export default function Toponomia() {
  return (
    <div class="container text-center py-2 d-flex-fluid">

    <div class="row ">

      <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">Toponomia</h5>

      <div class="col-6 py-5">
        <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">Yopal deriva su nombre de un árbol maderable, típico de la región, cuyo nombre es "yopo". De hecho, en el sitio donde se ubica actualmente la ciudad de Yopal existía un bosque de estos árboles o un yopal (bosque de yopos). El nombre "Yopo" es proveniente de la lengua indígena, los Salivas, y significa corazón
        </p>
        <Link to="/home" class="btn btn-secondary ">Volver a la pagina principal</Link>

      </div>

      <div class="col-6 py-5">
      <img  src={img11} alt="Foto" className=' w-75 rounded-pill' />
      </div>

    </div>
  </div >


  )
}