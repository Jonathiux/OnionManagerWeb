import React, { useState} from "react";
import ComponenteDia from './ComponenteDia';
import './contenedorDias.css';

const infoMes = [
    {nombre: 'Enero', dias: 31, comienza: 'domingo', diasConServicio: [], pendiente: []},
    {nombre: 'Febrero', dias: 28, comienza: 'miercoles', diasConServicio: [28, 10], pendiente: []},
    {nombre: 'Marzo', dias: 31, comienza: 'miercoles', diasConServicio: [28, 21, 12, 5, 4], pendiente: [2, 6]},
    {nombre: 'Abril', dias: 30, comienza: 'sabado', diasConServicio: [], pendiente: []},
    {nombre: 'Mayo', dias: 31, comienza: 'lunes', diasConServicio: [], pendiente: []},
    {nombre: 'Junio', dias: 30, comienza: 'jueves', diasConServicio: [], pendiente: []},
    {nombre: 'Julio', dias: 31, comienza: 'sabado', diasConServicio: [], pendiente: []},
    {nombre: 'Agosto', dias: 31, comienza: 'martes', diasConServicio: [], pendiente: []},
    {nombre: 'Septiembre', dias: 30, comienza: 'viernes', diasConServicio: [], pendiente: []},
    {nombre: 'Octubre', dias: 31, comienza: 'domingo', diasConServicio: [], pendiente: []},
    {nombre: 'Noviembre', dias: 30, comienza: 'miercoles', diasConServicio: [], pendiente: []},
    {nombre: 'Diciembre', dias: 31, comienza: 'viernes', diasConServicio: [], pendiente: []},
];
                                   const arreglo =  {
                                        dia:[10, 3, 27, 22],
                                        folio: [''],
                                    };
const diasServiciosActivos = [
    {mes: 'Enero', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Febrero', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Marzo', diaCompletado: {dia: arreglo.dia, folio: ['H1LC', 'JIJIJ',  'JKAS2']}, diaPendiente: {dia: [3, 18], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Abril', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Mayo', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Junio', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Julio', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Agosto', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Septiembre', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Octubre', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Noviembre', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
    {mes: 'Diciembre', diaCompletado: {dia: [28, 10], folio: ['H1LC', 'JKAS2']}, diaPendiente: {dia: [2, 6], folio: ['TLSQ', 'KIE4']}},
]

function ContenedorDias({contador}){
    let variable = contador;

    const [cantidadDias, setCantidadDias] = useState(infoMes[variable].dias);

    React.useEffect(() => {
        setCantidadDias(contador);
        variable = contador;
        console.log(cantidadDias);
    }, [contador]);

    let diasComponente = infoMes[variable].dias;
    let diaComienza = infoMes[variable].comienza;
    let servicioCompletado = diasServiciosActivos[variable].diaCompletado.dia;
    let servicioPendiente = diasServiciosActivos[variable].diaPendiente.dia;
    let nombreServiciosCompletado = diasServiciosActivos[variable].diaCompletado.folio;
    let nombreServiciosPendiente = diasServiciosActivos[variable].diaPendiente.folio;
    const array = [];

    const estadoDiaInfo = 'servicio-dia';
    const estadoDia = 'servicio-dia-escondido';

    const diaInicioLunes = 'container-dia-inicio-lunes';
    const diaInicioMartes = 'container-dia-inicio-martes';
    const diaInicioMiercoles = 'container-dia-inicio-miercoles';
    const diaInicioJueves = 'container-dia-inicio-jueves';
    const diaInicioViernes = 'container-dia-inicio-viernes';
    const diaInicioSabado = 'container-dia-inicio-sabado';
    const diaInicioDomingo = 'container-dia-inicio-domingo';

    const diaSinEstado = 'container-dia';
    const diaConEstado = 'container-dia-servicio';
    const diaServicioPendiente = 'container-dia-pendiente';
    let valor = 0;
    let valorPendiente = 0;

    for(let i = 0; i<diasComponente; i++){

        if(i===0 && diaComienza==='miercoles'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioMiercoles}/>)
            continue;
        }

        if(i===0 && diaComienza==='lunes'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioLunes}/>)
            continue;
        }

        if(i===0 && diaComienza==='martes'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioMartes}/>)
            continue;
        }

        if(i===0 && diaComienza==='jueves'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioJueves}/>)
            continue;
        }

        if(i===0 && diaComienza==='viernes'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioViernes}/>)
            continue;
        }

        if(i===0 && diaComienza==='sabado'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioSabado}/>)
            continue;
        }

        if(i===0 && diaComienza==='domingo'){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaInicioDomingo}/>)
            continue;
        }
        
        if(servicioCompletado.includes(i+1)){
            
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDiaInfo} claseContainer={diaConEstado} folio={nombreServiciosCompletado[valor]}/>)
            valor++;
        } else if(servicioPendiente.includes(i+1)){
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDiaInfo} claseContainer={diaServicioPendiente} folio={nombreServiciosPendiente[valorPendiente]}/>)
            valorPendiente++;
        } else {
            array.push(<ComponenteDia key={i} dia={i+1} clase={estadoDia} claseContainer={diaSinEstado}/>)
        }
    }

    return(
        <div className="container">
            {array}
        </div>
    );
}

export default ContenedorDias;