import React from 'react';
import ComponenteDia from './ComponenteDia';
import ContenedorDias from './ContenedorDias';
import TituloMes from './TituloMes';

const diasServiciosActivos = [
    {mes: 'Marzo', dia: 30, estado: true}
]

function Calendario(){
    
    return(
        <div className='calendario-container'>
            <TituloMes />
            <ContenedorDias>
                <ComponenteDia />
            </ContenedorDias>
        </div>
    )
}

export default Calendario