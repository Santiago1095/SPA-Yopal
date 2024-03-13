import { Link } from "react-router-dom";
import React from "react";
import "../../App.js";
import img6 from "../../assets/img6.jpg";

export default function Cultura() {
  return (
    <div class="container text-center py-2 border border-dark p-4 mb-4 border-opacity-25 ">
      <div class="row">
        <h5 class="text-center py-2 fs-1 fst-italic text-dark">Cultura</h5>

        <div class="rounded-start-5 col-6 py-4 bg-primary-subtle">
          <p class="card text-bg-light m-4 border  text-start fs-6 fst-italic bg-primary-subtle">
            La tradición y cultura de Yopal(Casanare) combina, en un mismo
            escenario, el pasado y presente de sus generaciones. Desde los
            espacios dedicados a la práctica de fútbol y baloncesto, por
            ejemplo, se observan algunas mangas de coleo que reviven el legado
            de los campesinos llaneros. Por su parte, la música autóctona de la
            región oriental colombiana todavía convive con las nuevas tendencias
            que amplifican las discotecas yopaleñas. En la capital se le canta
            al llano y a sus mujeres; aún se cuentan, a toque de arpa, cuatro y
            maracas, las historias de los ancestros. Los ritmos y cantos que
            resuenan a través de la capital expresan la idiosincrasia,
            mentalidad, costumbres, leyendas, mitos y creencias del casanareño.
          </p>
          <Link to="/home" class="btn btn-success ">
            Volver a la pagina principal
          </Link>
        </div>

        <div class="rounded-end-5 col-6 py-4 bg-primary-subtle">
          <img src={img6} alt="Foto" className=" w-100 rounded-5 " />
        </div>
      </div>
    </div>
  );
}
