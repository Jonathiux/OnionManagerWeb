import './index.css';
import React, { useState } from 'react';



export default function CardService(props) {
  const [select, setselected] = useState('card2')
  //const className = select ? "card" : "card2"
  
  function handleclick(){
    const doc = document.getElementsByClassName('content')
    for(let i=0; i<doc.length; i++){
      const hijo = doc[i].childNodes
      if(hijo[0].className=='card'){
        hijo[0].className='card2'
      }
      if(i==4){
        i=0
      }
    }
    setselected('card')
  }

  return (
    <>
      <div className='chupapi'>
        <div className='content' >
          <article className={select} >
            <div className='temporary_text'>
              <img precio={props.precio} className='imagen' src={props.img} alt="" />
            </div>
            <div  className='card_content' >
              <span className='card_title'>{props.nombre}</span>
              <span className='card_subtitle'>{props.subtitle}</span>
              <p className='card_description'>{props.descripcion}</p>
              <button className='buttons' id={props.nombre} onClick={handleclick}>Seleccionar</button>
            </div>
          </article >
        </div >
      </div>
    </>
  )
}


