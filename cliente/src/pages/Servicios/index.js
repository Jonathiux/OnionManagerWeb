import CardService from 'componentes/CardServices';
import './index.css';

export default function PaginaServicios() {
  return (
    <>
    <div className='row'>
    <CardService 
    nombre='aloja'
    descripcion='Weas'
    subtitle='aloja'
    />
   
    <CardService 
    nombre='hola'
    descripcion='Weas'
    subtitle='aloja'
    />

    <CardService 
    nombre='hola'
    descripcion='Weas'
    subtitle='aloja'
    />
     </div>
    </>
  );
}

