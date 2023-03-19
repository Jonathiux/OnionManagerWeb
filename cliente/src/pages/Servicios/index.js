import CardService from 'componentes/CardServices';
import Forms from 'componentes/ServiceForms';
import img from 'componentes/imgs/Cortecnc.jpg'
import './index.css';
import { useState } from 'react';

export default function PaginaServicios() {
  const[seleccion, setseleccion] = useState('Tipo de servicio')
  const[Tipo, setTipo] = useState(false)
  const selecciona = () => {
    console.log()

  }

  return (
    <>
    <div className='row'>
      <h1 className='text'>Nuestros servicios</h1>
    </div>
        <div className='row'>
          <div className='col' id='1' onClick={selecciona} > 
            <CardService id='1'  
              nombre='Corte cnc'
              subtitle='Maquilado de rines de aluminio'
              descripcion='Se maquila el rin en el cnc cambiando el aspecto de las ventilas, teniendo como opción variedad de diseños'
              img={img}
              
            />
          </div>
          <div className='col'  id='2' onClick={selecciona}>
            <CardService id='2'
              nombre='hola'
              descripcion='Weas'
              subtitle='aloja'
              img='/componentes/imgs/Cortecnc.jpg'
            />
          </div>
          <div className='col' id='3' onClick={selecciona}>
            <CardService id='3'
              nombre='hola'
              descripcion='Weas'
              subtitle='aloja'
            />
          </div>
          <div className='col' id='4' onClick={selecciona}>
            <CardService id='4'
              nombre='hola'
              descripcion='Weas'
              subtitle='aloja'
            />
          </div>
        </div>
        <div>
          <Forms tipoServicio={seleccion}/>
        </div>
    </>
  );
}

