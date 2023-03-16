import React from "react";
import ServicioBoton from "./servicio-botton";
import './servicio.css';


function Servicio(){
    return(
        <div className="menu-servicios">
            <div className="servicio">
                <div className="imagen">
                    <img src="" alt="Imagen del Servicio" />
                </div>
                <div className="info-servicio">
                    <div className="texto">
                        <h3 className="titulo-servicio">Ensanchado de rines</h3>
                        <h3 className="estado">Activo</h3>
                        <h3 className="fecha-entrega">30/Marzo/2023</h3>
                    </div>
                    <ServicioBoton/>
                </div>
            </div>
        </div>
    );
}

export default Servicio;