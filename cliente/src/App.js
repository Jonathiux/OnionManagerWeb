import Nav from 'componentes/Nav';
import Finanzas from 'pages/Finanzas';
import Home from 'pages/Home';
import Inventario from 'pages/Inventario'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inventario' element={<Inventario />} />
      <Route path='/finanzas' element={<Finanzas />} />
    </Routes>
    </>
  )
}

export default App;
