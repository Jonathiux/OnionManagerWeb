import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TablaPaginacion from 'componentes/TablaPaginacion'
import './index.css'
import Material from 'services/materiales'
// import { Form, Button } from 'react-bootstrap'

function Inventario(params) {

    const [data,setData] = useState([])

    useEffect(()=>{
        const m = new Material({})
        m.getMateriales()
            .then(m =>{
                setData(m)
            })
    },[])

    const headers = ['#', 'Nombre', 'Descripcion', 'Cantidad', 'Acciones']

    const editar = ()=>{
        alert('edicion')
    }

    const eliminar = ()=>{
        alert('Eliminar')
    }
    return (
        <>
            <div className='container container-inventario'>
                <h1>Inventario</h1>
                <div className='body-finanzas'>
                    <div className='col text-end'>
                        <Link to='asd' className='btn btn-success'>+Nuevo Material</Link>
                    </div>
                    <TablaPaginacion
                        data={data}
                        editar={editar}
                        eliminar={eliminar}
                        headers={headers}
                    />
                </div>
            </div>
        </>
    )
}

export default Inventario