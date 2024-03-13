import { Link } from "react-router-dom";
import React from "react";
import "../App.js";

function Center() {
  return (
    <div class="container-fluid ">
      <div class="row bg-primary-subtle py-5 text-center">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card py-4 bg-primary-subtle border border-0">
            <div class="card-body ">
              <h5 class="card-title text-center text-dark m-1 bg-primary-subtle border border-0 fs-3 fst-italic">
                Joropo
              </h5>
              <p class="card bg-primary-subtle text-dark m-4 border border-0 text-start fs-6 fst-italic">
                El joropo es un género musical y danza tradicional de Venezuela
                y Colombia. Su diversidad se manifiesta en distintas tipologías
                subregionales. Entre ellas cabe mencionar el joropo oriental, el
                joropo central, el joropo andino y el golpe larense en
                Venezuela; además del joropo llanero y los cantos de trabajo de
                los llanos en Venezuela y Colombia, En 2017, la Unesco incluyó
                los cantos de arreo y ordeño, en la Lista Representativa de
                Patrimonio Cultural Inmaterial del mundo.{" "}
              </p>
              <ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Contrapunteo
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Pasaje
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Golpe llanero
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Tonada
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Copla
                </ul>
              </ul>
              <Link
                to="/culturallanera/joropo"
                class="btn btn-primary-subtle border border-dark fw-bolder "
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card py-4 bg-primary-subtle border border-0">
            <div class="card-body ">
              <h5 class="card-title text-center text-dark m-1 bg-primary-subtle border border-0 fs-3 fst-italic">
                Instrumentos Musicales
              </h5>
              <p class="card bg-primary-subtle text-dark m-4 border border-0 text-start fs-6 fst-italic">
                Hasta la década de los 1950, en los llanos de Arauca se tocaba
                con bandolín, cuatro y maracas; en Casanare, se hacía con un par
                de tiples; hacia el Meta, la instrumentación era de tiple y
                bandola. Todos estos instrumentos de cuerda han sido
                reemplazados por el arpa, introducida en los años 1960 cuando
                llegó a Villavicencio el compositor araucano David Parales
                Bello, quien había vivido en Apure.{" "}
              </p>
              <ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Cuatro:{" "}
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Arpa{" "}
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Maracas o Capachos.{" "}
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Bandola o Violín Bandola
                </ul>
              </ul>
              <Link
                to="/culturallanera/instrumentos"
                class="btn btn-primary-subtle border border-dark fw-bolder "
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card py-4 bg-primary-subtle border border-0">
            <div class="card-body">
              <h5 class="card-title text-center text-dark m-1 bg-primary-subtle border border-0 fs-3 fst-italic">
                Comidas típicas de los llanos orientales
              </h5>
              <p class="card bg-primary-subtle text-dark m-4 border border-0 text-start fs-6 fst-italic">
                Quienes visitan los Llanos Orientales de Colombia no solo quedan
                sorprendidos por el paisaje, sino también por la gastronomía de
                la zona. Gran parte de la carne que se consume en el país y se
                exporta a otros países proviene de esta región, por lo que se
                espera que los platos típicos de la cultura llanera incluyan
                carnes de excelente calidad, los platos mas conocidos y pedidos
                son:{" "}
              </p>
              <ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Mamona
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Chiguiro asado
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Tungos Llaneros
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Pisillo
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Carne a la perra
                </ul>
              </ul>
              <Link
                to="/culturallanera/comida"
                class="btn btn-primary-subtle border border-dark fw-bolder "
              >
                Ver más informacion
              </Link>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card py-4 bg-primary-subtle border border-0">
            <div class="card-body ">
              <h5 class="card-title text-center text-dark m-1 bg-primary-subtle border border-0 fs-3 fst-italic">
                Atractivos turísticos de Yopal
              </h5>
              <p class="card bg-primary-subtle text-dark m-4 border border-0 text-start fs-6 fst-italic">
                Yopal se resalta como un territorio de abundancia, en el que la
                población podría soñar, es por eso que en Yopal Casanare buscan
                que los paisajes son uno de los principales atractivos que tiene
                el departamento, por lo que sumado a los aspectos naturales que
                ofrece este territorio y hermosos atardeceres consoliden al
                municipio como un lugar al que las personas en el país aspiren a
                conocer.{" "}
              </p>
              <ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Mirador de la Virgen de Manare
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Piscina Natural La Aguatoca
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Catedral San José
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Parque Temático Historias de Piedra
                </ul>
                <ul class="card bg-primary-subtle m-1 border border-0 text-start fs-6 fst-italic">
                  Museo Centro Histórico Del Oriente
                </ul>
              </ul>
              <Link
                to="/culturallanera/turistico"
                class="btn btn-primary-subtle border border-dark fw-bolder "
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

export default Center;
