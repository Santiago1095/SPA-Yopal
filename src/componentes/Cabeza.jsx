import { Link } from "react-router-dom";

import "../App.js";

function Cabeza() {
  return (
    <div className="container-fluid  py-3 text-center m-4 bg-light">
      <div className="row col-12">
        <div className="bg-light col-lg-3 col-6 py-2 ">
          <div className="card bg-light border border-light m-2">
            <div className="card-body d-felx">
              <h5 className="card-title m-2 bg-light border border-light fs-3 fst-italic">
                Yopal
              </h5>
              <p className="card text-bg-light m-1 border border-light text-start fs-6 fst-italic ">
                Yopal es un municipio colombiano, capital del departamento de
                Casanare. Su extensión territorial es de 2595 kilómetros
                cuadrados, y se sitúa a 317 kilómetros del distrito capital de
                Bogotá. Fundada por colonos boyacenses en 1915 es una de las
                capitales departamentales más jóvenes de que registra más...
              </p>
              <Link
                to="yopal"
                className="btn btn-secondary m-2 border border-light fw-bolder"
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-light col-lg-3 col-6 py-2">
          <div className="card bg-light border border-light m-2">
            <div className="card-body">
              <h5 className="card-title m-2 bg-light border border-light fs-3 fst-italic">
                Toponimia
              </h5>
              <p className="card text-bg-light m-1 d-flex border border-light text-start fs-6 fst-italic">
                Yopal deriva su nombre de un árbol maderable, típico de la
                región, cuyo nombre es "yopo". De hecho, en el sitio donde se
                ubica actualmente la ciudad de Yopal existía un bosque de estos
                árboles o un yopal (bosque de yopos). El nombre "Yopo" es
                proveniente de la lengua indígena, los Salivas, y significa
                corazón...
              </p>
              <Link
                to="toponomia"
                className="btn btn-secondary m-2 border border-light fw-bolder"
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-light col-lg-3 col-6 py-2">
          <div className="card bg-light border border-light m-2">
            <div className="card-body">
              <h5 className="card-title m-1 bg-light border border-light fs-3 fst-italic">
                Historia
              </h5>
              <p className="card text-bg-light m-1 border border-light text-start fs-6 fst-italic ">
                Antes de la conquista, en el territorio actual de Yopal vivían
                tribus pertenecientes a los indígenas achaguas. Estos indígenas
                consumían la yopa, sustancia alucinógena extraída del árbol de
                yopo, que abundaba en las riberas del río Cravo Sur. Los
                achaguas, además, cultivaban y consumían yuca, piña y
                semillas....
              </p>
              <Link
                to="historia"
                className="btn btn-secondary m-2 border border-light fw-bolder"
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-light col-lg-3 col-6 py-2">
          <div className="card bg-light border border-light m-2">
            <div className="card-body">
              <h5 className="card-title m-1 bg-light border border-light fs-3 fst-italic">
                Habitantes
              </h5>
              <p className="card text-bg-light m-1 border border-light text-start fs-6 fst-italic">
                Fundada por colonos boyacenses de las provincias del Centro y
                Lengupá, iniciando el año 1915, cuando Elías Granados construye
                su casa en el mismo sitio donde hoy es el centro de Yopal. A esa
                fundación se le conocía como «La Estancia de Don Elías», que se
                convirtió en posada ganadera...
              </p>
              <Link
                to="primeroshabitantes"
                className="btn btn-secondary m-2 border border-light fw-bolder"
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabeza;
