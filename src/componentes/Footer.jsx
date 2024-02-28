import React from "react";
import { Link, } from 'react-router-dom';
import '../App.js'


function Footer() {
  return (
    <div class="container-fluid bg-light m-2">
      <div class="row-12 ">
      </div>
      <div class="d-flex text-light fs-1 fw-bolder"> __ </div>

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body ">
              <h5 class="card-title m-1 bg-white border border-light fs-3 fst-italic text-start">Santiago Montañez Barón</h5>
              <p class="card text-bg-white m-4 border border-light text-start fs-6 fst-italic ">Pagina web de la ciudad de Yopal</p>
              <Link to="https://www.linkedin.com/in/santiago-monta%C3%B1ez-bar%C3%B3n-719719141/" class="btn btn-secondary border border-light fw-bolder">Contactame</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title m-1 bg-white border border-light fs-3 fst-italic text-start">Contacto</h5>
              <p class="card text-bg-white m-2 border border-light text-start fs-6 fst-italic">E-mail de contacto: Santiago.mbaron@gmail.com</p>

              <p class="card text-bg-white m-2 border border-light text-start fs-6 fst-italic">Twitter: @santiagobaron</p>

              <p class="card text-bg-white m-2 border border-light text-start fs-6 fst-italic">Ubicacion: Yopal - Casanare</p>

            </div>
          </div>
        </div>

        <div class="container-auto bg-white m-4">
          <div class="row-12 ">
          </div>
          <div class="card text-bg-white m-4 border border-light text-start fs-6 fst-italic">  Copyright © 2024 Santiago & DevTalles.com All Rights Reserved</div>

        </div>
      </div>
    </div>






  );
}

export default Footer;