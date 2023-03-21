import './index.css';
import React, { useState } from 'react';



export default function CardService({ nombre, subtitle, img, descripcion}) {
  const [select, setselected] = useState (false)
  const className = select ? "card" : "card2"
  return (
    <>
    <div className='chupapi'>
      <div className='content'>
        <article  className={className} onClick={() => setselected(!select)}>
          <div className='temporary_text'>
            <img className='imagen' src={img} alt="" />
          </div>
          <div className='card_content'>
            <span id='Titulo' className='card_title'>{nombre}</span>
            <span className='card_subtitle'>{subtitle}</span>
            <p className='card_description'>{descripcion}</p>
            <div className='card_description'>
            <h1 hidden>{className}</h1>
            </div>
          </div>
        </article >
      </div >
      </div>
    </>
  )
}


