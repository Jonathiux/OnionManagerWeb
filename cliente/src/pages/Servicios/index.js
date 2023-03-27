import CardService from 'componentes/CardServices';
import Forms from 'componentes/ServiceForms';
import Cortecnc from 'componentes/imgs/Cortecnc.jpg'
import Rectificar from 'componentes/imgs/Rectificado.jpg'
import Modificacion from 'componentes/imgs/modificacion2.jpg'
import Ensanchar from 'componentes/imgs/Ensanchado.jpg'
import './index.css';
import { useState } from 'react';

export default function PaginaServicios() {
  const [Tipo, setTipo] = useState('Tipo de servicio')
  const [hide, sethide] = useState(+true)
  const [precio, setPrecio] = useState('Precio unitario')

  function handleClick(e) {
    setTipo(e.target.id)
    switch(e.target.id){
      case 'Corte cnc':
        setPrecio(1500.0)
        sethide(+false)
        break
      case 'Rectificar':
        setPrecio(700.0)
        sethide(+true)
        break
      case 'Modificación':
        setPrecio(1000.0)
        sethide(+true)
        break
      case 'Ensanchar':
        setPrecio(600.0)
        sethide(+true)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className='chupapi'>
        <div className='row'>
          <h1 className='text'>Nuestros servicios</h1>
        </div>
        <div className='row'>
          <div className='col' onClick={handleClick}>
            <CardService
              nombre='Corte cnc'
              subtitle='Maquilado de rines de aluminio'
              descripcion='Se maquila el rin en el cnc cambiando el aspecto de las ventilas'
              img={Cortecnc}
            />
          </div>
          <div className='col' onClick={handleClick}>
            <CardService
              nombre='Rectificar'
              descripcion='Se realiza la reparación de abolladuras, alineación y retoque de pintura.'
              subtitle='Reparación general de los rines'
              img={Rectificar}
            />
          </div>
          <div className='col' onClick={handleClick}>
            <CardService
              nombre='Modificación'
              descripcion='Se realiza la modificación de rines al gusto y especificaciones del cliente.'
              subtitle='Rines personalizados'
              img={Modificacion}
            />
          </div>
          <div className='col' onClick={handleClick}>
            <CardService
              nombre='Ensanchar'
              descripcion='Se ensancha la cama del rin con anillos de solera de acero soldada'
              subtitle='Ensanchado de rines de acero'
              img={Ensanchar}
            />
          </div>
        </div>
        <div>
          <Forms
            tipoServicio={Tipo}
            hide={hide}
            preciou={precio}
          />
        </div>
      </div>
    </>
  );
}

