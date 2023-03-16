import Nav from 'componentes/Nav';
import Finanzas from 'pages/Finanzas';
import Home from 'pages/Home';
import Inventario from 'pages/Inventario'
import PaginaServicios from 'pages/Servicios';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inventario' element={<Inventario />} />
      <Route path='/finanzas' element={<Finanzas />} />
      <Route path='/Servicios' element={<PaginaServicios />}/>

    </Routes>
    </>
  )
}

export default App;
