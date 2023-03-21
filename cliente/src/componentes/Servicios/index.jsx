import React from "react";
import ServicioItem from "./ServicioItem";
import ServicioLista from "./ServicioLista";
import './servicio.css';


const servicios = [
    { servicio: 'Ensanchado de rines', imagen: 'url', estado: true, fecha: '30/Marzo/2023', observaciones: 'El servicio se ha tardado debido a mantenimiento' },
    { servicio: 'Modificar rines', imagen: 'url', estado: false, fecha: '2/Abril/2023', observaciones: 'Falta de especificar modificaciones' },
    { servicio: 'Cambio de barrenación', imagen: 'url', estado: true, fecha: '3/Abril/2023', observaciones: 'La barrenación se está logrando exitosamente' },
];

function Servicio(){
    return(
        <ServicioLista >
            {servicios.map(service => (
                <ServicioItem key={service.servicio} servicio={service.servicio} fecha={service.fecha} estado={service.estado} observaciones={service.observaciones}/>
            ))}
        </ServicioLista>
    );
}

export default Servicio;