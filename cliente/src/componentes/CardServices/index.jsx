import './index.css';
import Imag  from 'componentes/imgs/Cortecnc.jpg';


export default function CardService({ nombre, subtitle, descripcion }) {
  return (
    <>
      <div className='content'>
        <article className='card'>
          <div className='temporary_text'>
            <img className='imagen' src={Imag} alt="" />
          </div>
          <div className='card_content'>
            <span className='card_title'>{nombre}</span>
            <span className='card_subtitle'>{subtitle}</span>
            <p className='card_description'>{descripcion}</p>
            <div className='card_description'> 
            <button className='card-button'>more info</button>  
            </div>
          </div>
        </article >
      </div >
    </>
  )
}

