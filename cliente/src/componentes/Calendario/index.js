import React from 'react'
import './calendario.css'

function Calendario(){
    return(
        <div className='container-calendar'>
            <div>
                <h1 className='title'>Servicios del Mes</h1>
                <select name="mes" id="mes">
                    <option value="1">Enero</option>
                    <option value="2">Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                    
                </select>
                
            </div>
        </div>
    )
}