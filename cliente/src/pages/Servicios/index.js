import CardService from 'componentes/CardServices';
import Forms from 'componentes/ServiceForms';
import './index.css';

export default function PaginaServicios() {
  return (
    <>
    <div className='row'>
    
    <CardService 
    nombre='aloja'
    descripcion='He had three simple rules by which he lived. The first was to never eat blue food.'
    descripcionL='He took a sip of the drink. He wasnt sure whether he liked it or not, but at this moment it didnt matter. She had made it especially for him so he would have forced it down even if he had absolutely hated it. Thats simply the way things worked. She made him a new-fangled drink each day and he took a sip of it and smiled, saying it was excellent'
    subtitle='He took a sip of the drink.'
    />
   
    <CardService 
    nombre='hola'
    descripcion='Weas'
    subtitle='aloja'
    img='/componentes/imgs/Cortecnc.jpg'
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
    <CardService 
    nombre='hola'
    descripcion='Weas'
    subtitle='aloja'
    />
     </div>
     <Forms />
    </>
  );
}

