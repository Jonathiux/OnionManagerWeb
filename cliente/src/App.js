import { Route, Routes } from 'react-router-dom'

import ServiciosAdmin from 'componentes/Servicios'
import Nav from 'componentes/Nav'

import Finanzas from 'pages/Finanzas'
// import HomeCliente from 'pages/Home'
import Inventario from 'pages/Inventario'
import NewServicio from 'pages/Servicios'

function App() {
  return (
    <>
      <Nav />
      <Routes>

        {/* <Route path='/login' element={<Login />} /> */}

        {/* Cliente */}
        {/* <Route path='/' element={<HomeCliente />} /> */}
        <Route path='/crear-servicio' element={<NewServicio />} />
        {/* <Route path='/servicios-activos' element={<Servicios  />} /> */}
        {/* <Route path='/mi-cuenta' element={<MiCuenta />} /> */}

        {/* Admin */}
        {/* <Route path='/home-admin' element={<HomeAdmin />} /> */}
        {/* <Route path='/agenda' element={<Agenda />} /> */}
        <Route path='/servicios-admin' element={<ServiciosAdmin />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/finanzas' element={<Finanzas />} />

      </Routes>
    </>
  )
}

export default App;
