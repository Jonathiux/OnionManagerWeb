import React from "react";
import './servicioItem.css';


function ServicioItem(props){
    return(
        <li className="servicio-info">
            <div className="img">
                <img src="https://th.bing.com/th/id/R.a759cd120ca7a3d43c790c9fa439b921?rik=hmrmgPhP%2fdYBTA&pid=ImgRaw&r=0" alt="Imagen servicio" />
            </div>
            <div className="info">
                <h3><strong>Nombre servicio:</strong> {props.servicio}</h3>
                <details>
                    <h3><strong>Fecha de terminado:</strong> {props.fecha}</h3>
                    <h3><strong>Observaciones:</strong> {props.observaciones}</h3>
                </details>
            </div>
        </li>
    );
}

export default ServicioItem;