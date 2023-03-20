import React from 'react'
import { Link } from 'react-router-dom'
import TablaPaginacion from 'componentes/TablaPaginacion'
import './index.css'
// import { Form, Button } from 'react-bootstrap'

function Inventario(params) {

    const headers = ["#", "Nombre", "Precio", "Stock", "Estado", "Tipo de Producto", "Acciones"]

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
                        <Link to='asd' className='btn btn-success'>+Nuevo Producto</Link>
                    </div>
                    <TablaPaginacion
                        data={[{'nombre':'ssdfds','sdf':'sdfsdf','sdfs ':'sdfs'}]}
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