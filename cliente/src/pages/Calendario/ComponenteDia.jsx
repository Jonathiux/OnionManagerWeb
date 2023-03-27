import React from "react";
import './componenteDia.css';

function ComponenteDia({dia, clase, claseContainer, folio}){
    return(
        <div className={claseContainer}>
            <h4 className="numero-dia">{dia}</h4>
            <h4 className={clase}>Folio: {folio}</h4>
        </div>
    );
}

export default ComponenteDia;