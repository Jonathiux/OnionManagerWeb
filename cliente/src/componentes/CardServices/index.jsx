import './index.css';
import React, { useState } from 'react';



export default function CardService(props) {
  const [select, setselected] = useState()
  const className = select ? "card" : "card2"
  return (
    <>
      <div id={props.nombre} className='chupapi'  onClick={() =>setselected(!select)}>
        <div id={props.nombre} className='content' >
          <article id={props.nombre} className={className} >
            <div id={props.nombre} className='temporary_text'>
              <img precio={props.precio} id={props.nombre} className='imagen' src={props.img} alt="" />
            </div>
            <div id={props.nombre}  className='card_content' >
              <span id={props.nombre} className='card_title'>{props.nombre}</span>
              <span id={props.nombre} className='card_subtitle'>{props.subtitle}</span>
              <p id={props.nombre} className='card_description'>{props.descripcion}</p>
            </div>
          </article >
        </div >
      </div>
    </>
  )
}


