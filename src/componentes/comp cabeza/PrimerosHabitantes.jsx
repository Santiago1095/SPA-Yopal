import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img13 from "../../assets/img13.jpg";

export default function PrimerosHabitantes() {
  return (
    <div class="container text-center py-2 d-flex-fluid">
      <div class="row ">
        <h5 class="text-center py-2 fs-1 fst-italic text-white bg-success rounded-pill">
          Habitantes
        </h5>

        <div class="col-7 py-2">
          <p class="card text-bg-light m-4 border border-light text-start fs-6 fst-italic">
            Fundada por colonos boyacenses de las provincias del Centro y
            Lengupá, iniciando el año 1915, cuando Elías Granados construye su
            casa en el mismo sitio donde hoy es el centro de Yopal. A esa
            fundación se le conocía como «La Estancia de Don Elías», que se
            convirtió en posada ganadera obligatoria, ya que por ahí tenían que
            pasar los arrieros que llevaban a Tunja y Santander los ganados para
            la venta.
            <br /> <br />
            En 1928 construyeron casas Pedro Bernal y Concepción Camacho, en ese
            mismo año llegó Pedro Pablo González, procedentes de Tunja y
            alrededores, quien por su espíritu emprendedor se le considera el
            pionero de la fundación y formación del pueblo. Además el señor
            Pedro Pablo combinaba las actividades de tegua, latonero y hasta
            tinterillo [cita requerida]. Para 1930 se habían construido cuatro
            casas, la quinta la hizo Campo Elías Prieto y quedaba donde
            actualmente se encuentra la casa de Adelfo Prieto. Rigoberto Niño
            construyó la sexta casa de Yopal.
          </p>
          <Link to="/home" class="btn btn-secondary ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="col-5 py-5">
          <img src={img13} alt="Foto" className=" w-100 rounded-pill" />
        </div>
      </div>
    </div>
  );
}
