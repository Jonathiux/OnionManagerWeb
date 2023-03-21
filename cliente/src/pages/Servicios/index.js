import CardService from 'componentes/CardServices';
import Forms from 'componentes/ServiceForms';
import Cortecnc from 'componentes/imgs/Cortecnc.jpg'
import Rectificar from 'componentes/imgs/Rectificado.jpg'
import Modificacion from 'componentes/imgs/modificacion2.jpg'
import Ensanchar from 'componentes/imgs/Ensanchado.jpg'
import './index.css';
import { useState } from 'react';

export default function PaginaServicios() {
  const[seleccion, setseleccion] = useState('Tipo de servicio')
  const[Tipo, setTipo] = useState(false)
  
  const selecciona = (e) => {
    setTipo(parseInt(e.target.id))
    console.log(Tipo)
  }

  return (
    <>
    <div className='chupapi'>
    <div className='row'>
      <h1 className='text'>Nuestros servicios</h1>
    </div>
        <div className='row'>
          <div className='col' id='1' onClick={selecciona} > 
            <CardService  
              nombre='Corte cnc'
              subtitle='Maquilado de rines de aluminio'
              descripcion='Se maquila el rin en el cnc cambiando el aspecto de las ventilas, teniendo como opción variedad de diseños'
              img={Cortecnc}
              
            />
          </div>
          <div className='col'  id='2' onClick={selecciona}>
            <CardService
              nombre='Rectificar'
              descripcion='Se realiza la reparación de abolladuras, alineación y retoque de pintura.'
              subtitle='Reparación general de los rines'
              img={Rectificar}
            />
          </div>
          <div className='col' id='3' onClick={selecciona}>
            <CardService
              nombre='Modificación'
              descripcion='Se realiza la modificación de rines al gusto y especificaciónes del cliente.'
              subtitle='Rines personalizados'
              img={Modificacion}
            />
          </div>
          <div className='col' id='4' onClick={selecciona}>
            <CardService 
              nombre='Ensanchar'
              descripcion='Se ensancha la cama del rin con anillos de solera de acero soldada'
              subtitle='Ensanchado de rines de acero'
              img={Ensanchar}
            />
          </div>
        </div>
        <div>
          <Forms tipoServicio={Tipo}/>
        </div>
        </div>
    </>
  );
}

