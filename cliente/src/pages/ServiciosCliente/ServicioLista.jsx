import React from "react";
import './servicioLista.css';

function ServicioLista(props){
    return(
        <section className="lista"> 
            <ul>
                {props.children};
            </ul>
        </section>
    );
}

export default ServicioLista;