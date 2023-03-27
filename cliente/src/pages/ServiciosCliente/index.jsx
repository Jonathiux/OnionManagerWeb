import React, { useState, useEffect } from "react";
import ServicioItem from "./ServicioItem";
import ServicioLista from "./ServicioLista";
import Servicios from 'services/servicios'
import './servicio.css';
import useUser from "hooks/useUser";


function Servicio() {

    const { user } = useUser()
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        const s = new Servicios({ IDUsuario: user.id })

        if (user.id === 5) {
            s.getServicios(s)
                .then(resp => {
                    let ss = []
                    resp.forEach((s) => {
                        let obj = { servicio: '', fecha: '', observaciones: '', folio: 0, };
                        console.log(s)

                        if (s.TipoServicio === 1) {
                            obj.servicio = 'Corte de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 2) {
                            obj.servicio = 'Rectificación de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 3) {
                            obj.servicio = 'Ensanchado de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 4) {
                            obj.servicio = 'Cambio de barrenación'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 5) {
                            obj.servicio = 'Modificacion de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.FechaEntrega === null) {
                            obj.fecha = 'Falta por definir'
                            // setFechaEntregaServicio(fecha)
                        }else{
                            const f = new Date(s.FechaEntrega)
                            obj.fecha = f.getDay() + '/' +f.getMonth() +"/" +f.getFullYear()
                        }

                        //     setFolioServicio(s.Folio)
                        //     setObservacionesServicio(s.Observaciones)

                        // obj.servicio=nombreServicio;
                        //     // obj.fecha=fechaEntregaServicio;
                        obj.observaciones = s.Observaciones
                        obj.folio = s.Folio
                        ss = [...ss, obj]
                    })
                    setServicios(ss)
                })

        } else {
            s.getServiciosCliente(s)
                .then(resp => {

                    let ss = []
                    // console.log(resp)
                    resp.forEach((s) => {
                        let obj = { servicio: '', fecha: '', observaciones: '', folio: 0, };
                        console.log(s)

                        if (s.TipoServicio === 1) {
                            obj.servicio = 'Corte de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 2) {
                            obj.servicio = 'Rectificación de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 3) {
                            obj.servicio = 'Ensanchado de rines'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 4) {
                            obj.servicio = 'Cambio de barrenación'
                            // setNombreServicio(nombre)
                        }

                        if (s.TipoServicio === 5) {
                            obj.servicio = 'Modificacion de rines'
                            // setNombreServicio(nombre)
                        }

                        if (!s.FechaEntrega) {
                            obj.fecha = 'Falta por definir'
                            // setFechaEntregaServicio(fecha)
                        }

                        //     setFolioServicio(s.Folio)
                        //     setObservacionesServicio(s.Observaciones)

                        // obj.servicio=nombreServicio;
                        //     // obj.fecha=fechaEntregaServicio;
                        obj.observaciones = s.Observaciones
                        obj.folio = s.Folio
                        ss = [...ss, obj]
                    })
                    console.log(ss)
                    setServicios(ss)
                })
        }

    }, [user.id])

    return (
        <ServicioLista >
            {servicios.map((service, i) => (
                <ServicioItem
                    key={i}
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