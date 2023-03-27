import React from "react";
import ServicioItem from "./ServicioItem";
import ServicioLista from "./ServicioLista";
import './servicio.css';


const servicios = [
    { servicio: 'Ensanchado de rines', imagen: 'ensanchado', estado: true, fecha: '30/Marzo/2023', observaciones: 'El servicio se ha tardado debido a mantenimiento', folio: 'HJSN'},
    { servicio: 'Modificar rines', imagen: 'modificacion', estado: false, fecha: '2/Abril/2023', observaciones: 'Falta de especificar modificaciones', folio: 'KSCN'},
    { servicio: 'Cambio de barrenación', imagen: 'rectificacion', estado: true, fecha: '3/Abril/2023', observaciones: 'La barrenación se está logrando exitosamente', folio: 'ASPD'},
];

function Servicio(){

    return(
        <ServicioLista >
            {servicios.map(service => (
                <ServicioItem 
                    key={service.servicio} 
                    servicio={service.servicio} 
                    fecha={service.fecha} 
                    estado={service.estado} 
                    observaciones={service.observaciones}
                    folio={service.folio}
                    imagen={service.folio}
                />
            ))} 
        </ServicioLista>
    );
}

export default Servicio;