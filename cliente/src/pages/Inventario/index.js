import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TablaPaginacion from 'componentes/TablaPaginacion'
import './index.css'
import Material from 'services/materiales'
// import { Form, Button } from 'react-bootstrap'

function Inventario(params) {

    const [data,setData] = useState([])
    const m = new Material({})

    useEffect(()=>{
        m.getMateriales()
            .then(m =>{
                setData(m)
            })
    },[])

    const headers = ['#', 'Nombre', 'Descripcion', 'Existencias', 'Acciones']

    const editar = ()=>{
        alert('edicion')
    }

    const eliminar = (e)=>{
        console.log(parseInt(e.target.parentNode.id))
        m._id = parseInt(e.target.parentNode.id)
        m.deleteMaterial(m)
            .then(resp=>console.log(resp))
        // alert('Eliminar')
    }
    return (
        <>
            <div className='container container-inventario'>
                <h1>Inventario</h1>
                <div className='body-inventario'>
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