import { Link } from "react-router-dom";
import React from "react";
import "../App.js";

export default function NotFound() {
  return (
    <div>
      <br />

      <h1>404 NOT FOUND</h1>

      <br />

      <Link to="/home" class="btn btn-secondary">
        Volver a la pagina principal
      </Link>
    </div>
  );
}
