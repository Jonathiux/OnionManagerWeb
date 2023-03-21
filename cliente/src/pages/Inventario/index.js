import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TablaPaginacion from 'componentes/TablaPaginacion'
import './index.css'
import Material from 'services/materiales'
import ModalConfirmacion from 'componentes/ModalConfirmacion'

function Inventario(params) {

    const [eliminarConfirm, setEliminar] = useState(false)
    const [showModalConfirmacion, setShowModalConfirmacion] = useState(false)
    const [data, setData] = useState([])
    const [id, setId] = useState(null)

    const m = new Material({})

    useEffect(() => {
        m.getMateriales()
            .then(m => {
                setData(m)
            })
    }, [])

    const headers = useMemo(() => ['#', 'Nombre', 'Descripcion', 'Existencias', 'Acciones'], [])

    const editar = useCallback(() => {
        alert('edicion')
    }, [])

    useEffect(() => {
        if (eliminarConfirm) {
            m._id = id
            m.deleteMaterial(m)
                .then(resp => {
                    const newData = data.filter(s => s.IDMaterial !== id)
                    setData(newData)
                })
        }
    }, [eliminarConfirm])

    const eliminar = useCallback((e) => {
        handleCloseModalConfirmacion()
        setId(parseInt(e.target.parentNode.id))
        setEliminar(false)
    }, [])

    const handleCloseModalConfirmacion = () => {
        setShowModalConfirmacion(!showModalConfirmacion)
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
                    <ModalConfirmacion
                        show={showModalConfirmacion}
                        body={"¿Esta seguro que desea elimiar el producto?"}
                        title={"Eliminar Producto"}
                        handleClose={handleCloseModalConfirmacion}
                        respuesta={setEliminar}
                    />
                </div>
            </div>
        </>
    )
}

export default Inventario