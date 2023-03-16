import React from 'react'
import './calendario.css'

function Calendario(){
    return(
        <div className='container-calendar'>
            <div className='Mes-Titulo'>
                <button className='mes-anterior'> <img src="/atras.png" alt="Flecha Atras" /></button>
                <h1 className='title'>Marzo</h1>
                <button className='mes-siguiente'> <img src="/proximo.png" alt="Flecha Siguiente" /></button>
            </div>
            <div className='contenedor-dias'>
                <div className='nombre-dias'>
                    <h3>L</h3>
                    <h3>M</h3>
                    <h3>M</h3>
                    <h3>J</h3>
                    <h3>V</h3>
                    <h3>S</h3>
                    <h3>D</h3>
                </div>
                <div className='contenedor-componentes-dias'>

                </div>
                <h1>hola</h1>
                <img src="proximo.png" alt="img" />
            </div>
        </div>
    )
}

export default Calendario