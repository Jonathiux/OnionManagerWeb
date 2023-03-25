import CardService from 'componentes/CardServices';
import Forms from 'componentes/ServiceForms';
import Cortecnc from 'componentes/imgs/Cortecnc.jpg'
import Rectificar from 'componentes/imgs/Rectificado.jpg'
import Modificacion from 'componentes/imgs/modificacion2.jpg'
import Ensanchar from 'componentes/imgs/Ensanchado.jpg'
import './index.css';
import { useState } from 'react';

export default function PaginaServicios() {
  const [Tipo, setTipo] = useState('Tipo Servicio')
  const [hide, sethide] = useState(true)
  const [precio, setPrecio] = useState(0.0)

  function handleClick(e) {
    setTipo(e.target.id)
    if (e.target.id === 'Corte cnc') {
      sethide(false)
    } else {
      sethide(true)
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
              precio='1200'
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
            precio={precio}
          />
        </div>
      </div>
    </>
  );
}

