import React from "react";
import './servicioItem.css';
import Reparacion from './reparacion.jpg';


function ServicioItem(props){

    return( 
        <li className="servicio-info">
            <div className="img">
                <img src={Reparacion} alt="Imagen servicio" />
            </div>
            <div className="info">
                <h3><strong>{props.servicio}</strong></h3>
                <details>
                    <h5><strong>Folio: </strong>{props.folio}</h5>
                    <h5><strong>Fecha de terminado:</strong> {props.fecha}</h5>
                    <h5><strong>Observaciones:</strong> {props.observaciones}</h5>
                </details>
            </div>
        </li>
    );
}

export default ServicioItem;