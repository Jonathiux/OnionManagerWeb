import React from 'react'
import { Table } from 'react-bootstrap'
import tras from 'iconos/trash.png'
import pencil from 'iconos/editar.png'

function Headers({ headers = [] }) {
    return (
        <>
            {
                headers.map(header =>
                    <th key={header}>{header}</th>
                )
            }
        </>
    )
}


function Tabla({ headers, lista, editar, eliminar } = {}) {

    function Body({ data = [] } = {}) {
        return (
            <>
                {
                    data.map((fila, k) =>
                        <FilaProduct key={k} p={fila} />
                    )
                }
            </>
        )
    }

    function FilaProduct({ p }) {

        // const precio = parseInt(p.precio).toLocaleString('es-MX', {
        //     style: 'currency',
        //     currency: 'MXN'
        // })

        return (
            <tr id={`fila${p.IDMaterial}`} >
                <td>{p.IDMaterial}</td>
                <td>{p.Nombre}</td>
                <td>{p.Descripcion}</td>
                <td>{p.Cantidad}</td>
                {/* <td>{precio}</td> */}
                {/* <td>{parseInt(p.status) === 1 ? "Visible" : "Oculto"}</td> */}
                <td className='d-flex'>
                    <div style={{cursor:'pointer'}} id={p.IDMAterial} onClick={eliminar} className='mx-2'>
                        {/* <i id={p.id} className=""></i> */}
                        <img alt='Eliminar' src={tras} style={{height:'30px'}} />
                    </div>
                    <div style={{cursor:'pointer'}} id={p.IDMaterial} onClick={editar} className='mx-2'>
                        <img alt='Editar' src={pencil} style={{height:'30px'}} />
                        {/* <i id={p.id} className="bi bi-pencil-square"></i> */}
                    </div>
                </td>
            </tr>
        )
    }


    return (
        <>
            <Table striped bordered hover size="sm" >
                <thead className='text-center'>
                    <tr>
                        <Headers headers={headers} />
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <Body data={lista} />
                </tbody>
            </Table>
        </>
    )
}

export default Tabla