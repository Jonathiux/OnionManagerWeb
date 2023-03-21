import React, { useState} from "react"
import './tituloMes.css'
import flechaAtras from './atras.png'
import flechaAdelante from './proximo.png'

const mes = [
    {valor: 1, mes: 'Enero', dias: 31},
    {valor: 2, mes: 'Febrero', dias: 28},
    {valor: 3, mes: 'Marzo', dias: 31},
    {valor: 4, mes: 'Abril', dias: 30},
    {valor: 5, mes: 'Mayo', dias: 31},
    {valor: 6, mes: 'Junio', dias: 30},
    {valor: 7, mes: 'Julio', dias: 31},
    {valor: 8, mes: 'Agosto', dias: 31},
    {valor: 9, mes: 'Septiembre', dias: 30},
    {valor: 10, mes: 'Octubre', dias: 31},
    {valor: 11, mes: 'Noviembre', dias: 30},
    {valor: 12, mes: 'Diciembre', dias: 31},
];

function TituloMes(){
    const [contador, setContador] = useState(3);

    const handleAumentar = () => {
        setContador(contador+1);
    }

    const handleDisminuir = () => {
        setContador(contador-1);
    }

    return(
        <div className="row">
            <div className="titulo">
                <div className="info-mes">
                    <img src={flechaAtras} alt="Flecha anterior" onClick={handleDisminuir}/>
                    <h3>{mes[contador].mes}</h3>
                    <img src={flechaAdelante} alt="Flecha adelante" onClick={handleAumentar}/>
                </div>
                <div className="dias">
                    <h3>L</h3>
                    <h3>M</h3>
                    <h3>M</h3>
                    <h3>J</h3>
                    <h3>V</h3>
                    <h3>S</h3>
                    <h3>D</h3>
                </div>
            </div>
        </div>
    );
}

export default TituloMes;