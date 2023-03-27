import React, { useState, useEffect} from "react";
import ServicioItem from "./ServicioItem";
import ServicioLista from "./ServicioLista";
import Servicios from 'services/servicios'
import './servicio.css';


const servicios = [
    
];

function Servicio(){

    const [servicesAdmin, setServicesAdmin] = useState([])
    const [nombreServicio, setNombreServicio] = useState('')
    const [folioServicio, setFolioServicio] = useState('');
    const [fechaEntregaServicio, setFechaEntregaServicio] = useState([''])
    const [observacionesServicio, setObservacionesServicio] = useState([''])

    useEffect(() => {
        const s = new Servicios({IDUsuario:5})
        s.getServiciosCliente(s)
            .then(resp => {
                let obj = {servicio:'', fecha:'', observaciones: '', folio:0,};
                
                setServicesAdmin(resp)

                servicesAdmin.forEach((s) => {

                    if(s.TipoServicio === 1){
                        let nombre = 'Corte de rines'
                        setNombreServicio(nombre)
                    }
                    if(s.TipoServicio === 2){
                        let nombre = 'Rectificación de rines'
                        setNombreServicio(nombre)
                    }
                    if(s.TipoServicio === 3){
                        let nombre = 'Ensanchado de rines'
                        setNombreServicio(nombre)
                    }
                    if(s.TipoServicio === 4){
                        let nombre = 'Cambio de barrenación'
                        setNombreServicio(nombre)
                    }
                    if(s.TipoServicio === 5){
                        let nombre = 'Modificacion de rines'
                        setNombreServicio(nombre)
                    }
                    if(s.FechaEntrega == null){
                        let fecha = 'Falta por definir'
                        setFechaEntregaServicio(fecha)
                    }

                    setFolioServicio(s.Folio)
                    setObservacionesServicio(s.Observaciones)
                    obj.servicio=nombreServicio;
                    obj.fecha=fechaEntregaServicio;
                    obj.observaciones=observacionesServicio;
                    obj.folio=folioServicio;

                    console.log(obj)

                    servicios.push(obj)
                })

                
            })
    }, [])

    return(
        <ServicioLista >
            {servicios.map(service => (
                <ServicioItem 
                    key={service.folio} 
                    servicio={service.servicio} 
                    fecha={service.fecha} 
                    observaciones={service.observaciones}
                    folio={service.folio}
                />
            ))} 
        </ServicioLista>
    );
}

export default Servicio;