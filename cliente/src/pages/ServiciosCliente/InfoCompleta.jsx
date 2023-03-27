import React from "react";
import './infoCompleta.css';

function InfoCompleta(){
    return(
        <div className="ventana-servicio">
            <div className="cuadro-img">
                <img src="" alt="" />
            </div>
            <div className="info">
                <h3>Nombre Servicio</h3>
                <h3>Observaciones:</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nam cum harum quidem beatae pariatur, dolore reiciendis hic dolor explicabo iste quam magni omnis ut itaque ad eos debitis perferendis.</p>
                <h3>Fecha Entrega: </h3>
            </div>
        </div>
    );
}

export default InfoCompleta;