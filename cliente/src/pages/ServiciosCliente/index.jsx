import React, { useState, useEffect} from "react";
import ServicioItem from "./ServicioItem";
import ServicioLista from "./ServicioLista";
import Servicios from 'services/servicios'
import './servicio.css';
import { rsort } from "semver";


function Servicio(){
    const [servicios, setServicios] = useState([]) 
    const [servicesAdmin, setServicesAdmin] = useState([])
    const [nombreServicio, setNombreServicio] = useState('')
    const [folioServicio, setFolioServicio] = useState('');
    const [fechaEntregaServicio, setFechaEntregaServicio] = useState([''])
    const [observacionesServicio, setObservacionesServicio] = useState([''])

    useEffect(() => {
        const s = new Servicios({IDUsuario:5})
        s.getServiciosCliente(s)
            .then(resp => {
                console.log(resp)

                const obj = {servicio:'', fecha:'', observaciones: '', folio:0,};
                let ss = []
                
                resp.forEach((s) => {
                    // console.log(s.Folio)

                    if(s.TipoServicio === 1){
                        obj.servicio = 'Corte de rines'
                        // setNombreServicio(nombre)
                    }
                    
                    if(s.TipoServicio === 2){
                        obj.servicio = 'Rectificación de rines'
                        // setNombreServicio(nombre)
                    }
                    
                    if(s.TipoServicio === 3){
                        obj.servicio = 'Ensanchado de rines'
                        // setNombreServicio(nombre)
                    }

                    if(s.TipoServicio === 4){
                        obj.servicio = 'Cambio de barrenación'
                        // setNombreServicio(nombre)
                    }

                    if(s.TipoServicio === 5){
                        obj.servicio = 'Modificacion de rines'
                        // setNombreServicio(nombre)
                    }

                    if(s.FechaEntrega == null){
                        obj.fecha = 'Falta por definir'
                        // setFechaEntregaServicio(fecha)
                    }

                //     setFolioServicio(s.Folio)
                //     setObservacionesServicio(s.Observaciones)

                    // obj.servicio=nombreServicio;
                //     // obj.fecha=fechaEntregaServicio;
                    obj.observaciones=s.Observaciones
                    obj.folio=s.Folio
                    console.log(obj.folio)
                    ss = [obj,...ss]
                })
                console.log(ss)
                // setServicios(ss)
            })
    }, [])

    return(
        <ServicioLista >
            {servicios.map(service => (
                <ServicioItem 
                    key={service.id} 
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