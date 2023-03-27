import { Navigate, Route, Routes, useHref } from 'react-router-dom'

import ServiciosAdmin from 'componentes/Servicios'
import Nav from 'componentes/Nav'

// import HomeCliente from 'pages/Home'
import Finanzas from 'pages/Finanzas'
import Inventario from 'pages/Inventario'
import NewServicio from 'pages/Servicios'
import Login from 'pages/Login'
import Calendario from 'pages/Calendario'
import Registrarse from 'pages/registrarse'
import ErrorPage from 'pages/ErrorPage'
import MiCuenta from 'pages/MiCuenta'

import useUser from 'hooks/useUser'

import './global.css'


function App() {

  const { isLogged, user } = useUser()
  const href = useHref()

  return (
    <>
      {
        (href.toLowerCase() !== "/login".toLowerCase() &&
          href.toLowerCase() !== "/404".toLowerCase() &&
          href.toLowerCase() !== "/registro".toLowerCase()) &&
        <Nav />
      }
      <Routes>

        <Route path='/login' element={<Login />} />
        {/* <Route path="/:rest/*" element={<Navigate to={'/404'}  state={{ruta:'login'}} />} /> */}
        <Route path="/*" element={<Navigate to={'/404'} state={{ ruta: 'login' }} />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path='/registro' element={<Registrarse />} />

        {
          isLogged &&
          <>
            {
              (parseInt(user.tipo) === 0) &&
              <>
                {/* Cliente */}
                <Route path='/' element={<>Aqui estubiera el home del cliente</>} />
                <Route path='/crear-servicio' element={<NewServicio />} />
              </>
            }
            {
              (parseInt(user.tipo) === 1) &&
              <>
                {/* Admin */}
                <Route path='/home-admin' element={<Calendario />} />
                <Route path='/servicios-admin' element={<ServiciosAdmin />} />
                <Route path='/inventario' element={<Inventario />} />
                <Route path='/finanzas' element={<Finanzas />} />
              </>
            }
            <Route path='/mi-cuenta' element={<MiCuenta />} />
          </>
        }

      </Routes>
    </>
  )
}

export default App;
