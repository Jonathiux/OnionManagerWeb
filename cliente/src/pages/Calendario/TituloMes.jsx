import React, { useState} from "react"
import ContenedorDias from './ContenedorDias';
import './tituloMes.css'
import flechaAtras from './atras.png'
import flechaAdelante from './proximo.png'

const mesInfo = [
    {valor: 0, mes: 'Enero', dias: 31},
    {valor: 1, mes: 'Febrero', dias: 28},
    {valor: 2, mes: 'Marzo', dias: 31},
    {valor: 3, mes: 'Abril', dias: 30},
    {valor: 4, mes: 'Mayo', dias: 31},
    {valor: 5, mes: 'Junio', dias: 30},
    {valor: 6, mes: 'Julio', dias: 31},
    {valor: 7, mes: 'Agosto', dias: 31},
    {valor: 8, mes: 'Septiembre', dias: 30},
    {valor: 9, mes: 'Octubre', dias: 31},
    {valor: 10, mes: 'Noviembre', dias: 30},
    {valor: 11, mes: 'Diciembre', dias: 31},
];

function TituloMes(){
    const nuevoContador = mesInfo[2].valor;
    const [contador, setContador] = useState(nuevoContador);

    const handleAumentar = () => {
        console.log(contador);
        setContador(contador+1);
        
    }

    const handleDisminuir = () => {
        console.log(contador);
        setContador(contador-1);
    }

    return(
        <div>
            <div className="titulo">
                <div className="info-mes"> 
                    <img src={flechaAtras} alt="Flecha anterior" onClick={() => handleDisminuir(nuevoContador)} className="flecha-izquierda"/>
                    <h3>{mesInfo[contador].mes}</h3>
                    <img src={flechaAdelante} alt="Flecha adelante" onClick={handleAumentar} className="flecha-derecha"/>
                </div>
                <div className="info">
                        <p className="caja-uno"></p>
                        <p className="info-completado">Fecha estimada de servicio completado</p>
                        <p className="caja-dos"></p>
                        <p className="info-pendiente">Fecha de inicio de servicio</p>
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
            <ContenedorDias contador={contador} setContador={setContador}/>
        </div>
    );
}

export default TituloMes;