import Nav from 'componentes/Nav';
import Finanzas from 'pages/Finanzas';
import Home from 'pages/Home';
import Inventario from 'pages/Inventario'
import { Route, Routes } from 'react-router-dom';
import Servicio from 'componentes/Servicios';
import BasicExample from 'pages/Servicios';
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Nav />
    <Login />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inventario' element={<Inventario />} />
      <Route path='/finanzas' element={<Finanzas />} />
      <Route path='/Servicios' element={<Servicio/>}/>
      <Route path='/Servicio' element={<BasicExample/>}/>

    </Routes>
      {/* Aqui deben ir todas las paginas */}

    </>
  )
}

export default App;
