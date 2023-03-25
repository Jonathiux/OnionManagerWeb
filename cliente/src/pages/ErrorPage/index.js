import React, { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import './index.css'

function ErrorPage(params) {

    const location = useLocation()
    const navigate = useNavigate()

    
    useEffect(()=>{
        if(location.state){
            navigate('/'+location.state.ruta)
        }
    })

    return(
        <>
        <div className="text-center container-errorPage">
            <h1>Error 404</h1>
            <Link className="nav-link" to="/login" style={{fontSize:"25px", margin:"60px"}}> Regresar Inicio </Link>
        </div>
        </>
    )
}

export default ErrorPage