import React from "react";

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
    return(
        <div className="titulo">
            <div className="info-mes">
                <img src="" alt="" />
                <h3></h3>
                <img src="" alt="" />
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default TituloMes;