import { BrowserRouter, Routes, Route, NavLink, Navigate, Link, Outlet } from 'react-router-dom';

import './App.css';

import Cabeza from './componentes/Cabeza';
import Titulo from './componentes/Titulo';
import Footer from './componentes/Footer';
import Center from './componentes/Center';
import Navbar from './componentes/Navbar';
import Next from './componentes/Next';  
import TitleTwo from './componentes/TitleTwo';
import Yopal from './componentes/comp cabeza/Yopal';
import Home from './componentes/Home';
import NotFound from './componentes/NotFound';
import Geografía from './componentes/comp navbar/Geografia';
import Hidrografia from './componentes/comp navbar/Hidrografia';
import CentrosComerciales from './componentes/comp navbar/CentrosComerciales';
import Barrios from './componentes/comp navbar/Barrios';
import Hoteles from './componentes/comp navbar/Hoteles';
import Cultura from './componentes/comp navbar/Cultura';
import Toponomia from './componentes/comp cabeza/Toponomia';
import Historia from './componentes/comp cabeza/Historia';
import PrimerosHabitantes from './componentes/comp cabeza/PrimerosHabitantes';
import Joropo from './componentes/culturaLlanera/Joropo';
import Instrumentos from './componentes/culturaLlanera/Instrumentos';
import Comida from './componentes/culturaLlanera/Comida';
import Turistico from './componentes/culturaLlanera/Turistico';


export default function App() {
  return (
    <BrowserRouter>

    <Navbar/>
           
      <Routes>

       
        <Route path='/home' element={<Home/>} />
        <Route path='/home/geografia' element={<Geografía/>} />
        <Route path='/home/hidrografia' element={<Hidrografia/>} />
        <Route path='/home/centroscomerciales' element={<CentrosComerciales/>} />
        <Route path='/home/barrios' element={<Barrios/>} />
        <Route path='/home/hoteles' element={<Hoteles/>} />
        <Route path='/home/cultura' element={<Cultura/>} />

        <Route path='home/yopal' element={<Yopal/>} />
        <Route path='home/toponomia' element={<Toponomia/>} />
        <Route path='home/historia' element={<Historia/>} />
        <Route path='home/primeroshabitantes' element={<PrimerosHabitantes/>} />
        

        <Route path='/culturallanera/joropo' element={<Joropo/>} />
        <Route path='/culturallanera/instrumentos' element={<Instrumentos/>} />
        <Route path='/culturallanera/comida' element={<Comida/>} />
        <Route path='/culturallanera/turistico' element={<Turistico/>} />

        <Route path='/cabeza' element={<Cabeza/>} />
        <Route path='/titulo' element={<Titulo/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/center' element={<Center/>} />      
        <Route path='/next' element={<Next/>} />
        <Route path='/titletwo' element={<TitleTwo/>} />
        
        <Route path='/*' element={<NotFound/>} />

      </Routes>    
      
    </BrowserRouter>
  )
}


