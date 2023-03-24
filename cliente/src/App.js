import { Route, Routes } from 'react-router-dom'

import ServiciosAdmin from 'componentes/Servicios'
import Nav from 'componentes/Nav'

import Finanzas from 'pages/Finanzas'
// import HomeCliente from 'pages/Home'
import Inventario from 'pages/Inventario'
import NewServicio from 'pages/Servicios'
import Login from 'pages/Login'
import Registrarse from 'pages/registrarse'

function App() {
  return (
    <>
      <Nav />
      <Routes>

        <Route path='/login' element={<Login />} />

        {/* Cliente */}
        {/* <Route path='/' element={<Servicios  />} /> */}
        <Route path='/crear-servicio' element={<NewServicio />} />
        <Route path='/mi-cuenta' element={<Registrarse />} />

        {/* Admin */}
        {/* <Route path='/home-admin' element={<Agenda />} /> */}
        <Route path='/servicios-admin' element={<ServiciosAdmin />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/finanzas' element={<Finanzas />} />

      </Routes>
    </>
  )
}

export default App;
