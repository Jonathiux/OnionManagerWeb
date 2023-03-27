import React, { useState, useEffect} from "react";
import Servicio from 'services/servicios'
import ComponenteDia from './ComponenteDia';
import './contenedorDias.css';

const infoMes = [
    {nombre: 'Enero', dias: 31, comienza: 'domingo'},
    {nombre: 'Febrero', dias: 28, comienza: 'miercoles'},
    {nombre: 'Marzo', dias: 31, comienza: 'miercoles'},
    {nombre: 'Abril', dias: 30, comienza: 'sabado'},
    {nombre: 'Mayo', dias: 31, comienza: 'lunes'},
    {nombre: 'Junio', dias: 30, comienza: 'jueves'},
    {nombre: 'Julio', dias: 31, comienza: 'sabado'},
    {nombre: 'Agosto', dias: 31, comienza: 'martes'},
    {nombre: 'Septiembre', dias: 30, comienza: 'viernes'},
    {nombre: 'Octubre', dias: 31, comienza: 'domingo'},
    {nombre: 'Noviembre', dias: 30, comienza: 'miercoles'},
    {nombre: 'Diciembre', dias: 31, comienza: 'viernes'},
];

function ContenedorDias({contador}){
    let variable = contador;

    const [cantidadDias, setCantidadDias] = useState(infoMes[variable].dias);
    const [services, setServices] = useState([])
    const [diaE, setDiaE] = useState([])
    const [dateE, setDateE] = useState([])
    const [diaF, setDiaF] = useState([])
    const [dateF, setDateF] = useState([])
    const [diaMar, setDiaMar] = useState([])
    const [dateMar, setDateMar] = useState([])

    const [folioEneroP, setFolioEneroP] = useState([])
    const [dateEneroP, setDateEneroP] = useState([])
    const [folioFebreroP, setFolioFebreroP] = useState([])
    const [dateFebreroP, setDateFebreroP] = useState([])
    const [folioMarzoP, setFolioMarzoP] = useState([])
    const [dateMarzoP, setDateMarzoP] = useState([])

    const arregloEnero =  {
        dia: dateE,
        folio: diaE,
        diaP: dateEneroP,
        folioP: folioEneroP,
    };

    const arregloFebrero = {
        dia: dateF,
        folio: diaF,
        diaP: dateFebreroP,
        folioP: folioFebreroP,
    }

    const arregloMarzo = {
        dia: dateMar,
        folio: diaMar,
        diaP: dateMarzoP,
        folioP: folioMarzoP,
    }

    const diasServiciosActivos = [
        {mes: 'Enero', diaCompletado: {dia: arregloEnero.dia, folio: arregloEnero.folio}, diaPendiente: {dia: arregloEnero.diaP, folio: arregloEnero.folioP}},
        {mes: 'Febrero', diaCompletado: {dia: arregloFebrero.dia, folio: arregloFebrero.folio}, diaPendiente: {dia: arregloFebrero.diaP, folio: arregloFebrero.folioP}},
        {mes: 'Marzo', diaCompletado: {dia: arregloMarzo.dia, folio: arregloMarzo.folio}, diaPendiente: {dia: arregloMarzo.diaP, folio: arregloMarzo.folioP}},
        {mes: 'Abril', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Mayo', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Junio', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Julio', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Agosto', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Septiembre', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Octubre', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Noviembre', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
        {mes: 'Diciembre', diaCompletado: {dia: [], folio: []}, diaPendiente: {dia: [], folio: []}},
    ]
    

    React.useEffect(() => {
        const s = new Servicio({})
        s.getServicios(s)
            .then(resp => {
                setServices(resp)  
                let folios = []
                let diaEnero = []
                let foliosFe = []
                let diaFebrero = []
                let foliosMar = []
                let diaMarzo = []

                let foliosEneroP = []
                let diaEneroP = []
                let foliosFebreroP = []
                let diaFebreroP = []
                let foliosMarzoP = []
                let diaMarzoP = []

                services.forEach((s) => {
            
                    if(s.FechaEntrega.includes('2023') && s.FechaEntrega.includes('-01-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaEnero.push(valor)
                        folios.push(s.Folio)
                        setDiaE(folios)
                        setDateE(diaEnero)
                    }
                    if(s.FechaEntrega.includes('2023') && s.FechaEntrega.includes('-02-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaFebrero.push(valor)
                        foliosFe.push(s.Folio)
                        setDiaF(foliosFe)
                        setDateF(diaFebrero)
                    }
                    if(s.FechaEntrega.includes('2023') && s.FechaEntrega.includes('-03-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaMarzo.push(valor)
                        foliosMar.push(s.Folio)
                        setDiaMar(foliosMar)
                        setDateMar(diaMarzo)
                    }
                    if(s.FechaInicio.includes('2023') && s.FechaInicio.includes('-01-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaEneroP.push(valor)
                        foliosEneroP.push(s.Folio)
                        setFolioEneroP(foliosEneroP)
                        setDateEneroP(diaEneroP)
                    }
                    if(s.FechaInicio.includes('2023') && s.FechaInicio.includes('-02-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaFebreroP.push(valor)
                        foliosFebreroP.push(s.Folio)
                        setFolioFebreroP(foliosFebreroP)
                        setDateFebreroP(diaFebreroP)
                    }
                    if(s.FechaInicio.includes('2023') && s.FechaInicio.includes('-03-')){
                        let fecha = new Date(s.FechaEntrega)
                        let valor = fecha.getDate()
                        diaMarzoP.push(valor)
                        foliosMarzoP.push(s.Folio)
                        setFolioMarzoP(foliosMarzoP)
                        setDateMarzoP(diaMarzoP)
                    }
                })
                
            })
    }, [contador])

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