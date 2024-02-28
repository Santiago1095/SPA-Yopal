import {Link } from "react-router-dom"

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
               
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link to='/home' class="nav-link text-white" >Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='home/geografia' class="nav-link text-white" >Geografía</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='home/hidrografia' class="nav-link text-white" >Hidrografía</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='home/centroscomerciales' class="nav-link text-white" >Centros Comerciales</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='home/barrios' class="nav-link text-white" >Barrios</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='home/hoteles' class="nav-link text-white" >Hoteles</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='home/cultura' class="nav-link text-white" >Cultura</Link>
                        </li>


                    </ul>
                </div>


            </div>
        </nav>


    )
}

export default Navbar