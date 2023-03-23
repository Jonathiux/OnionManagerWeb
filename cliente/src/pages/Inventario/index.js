import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import { Link } from 'react-router-dom'
import TablaPaginacion from 'pages/Inventario/TablaPaginacion'
import './index.css'
import Material from 'services/materiales'
import ModalConfirmacion from 'pages/Inventario/ModalConfirmacion'
import ModalMaterial from './ModalMaterial'

function Inventario(params) {

    const [eliminarConfirm, setEliminar] = useState(false)
    const [showModalConfirmacion, setShowModalConfirmacion] = useState(false)
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const [modalMaterial, setModalMaterial] = useState({ title: null, estado: false })

    const m = useMemo(() => new Material({}), [])
    const headers = useMemo(() => ['#', 'Nombre', 'Descripcion', 'Existencias', 'Acciones'], [])

    useEffect(() => {
        m.getMateriales()
            .then(m => {
                setData(m)
            })
    }, [m])


    const editar = useCallback(() => {
        setModalMaterial({ estado: true, title: 'Editar Material' })
    }, [])

    const handleCloseModalMaterial = () => {
        setModalMaterial({ estado: false })
    }

    const newMaterial = () => {
        setModalMaterial({ estado: true, title: 'Nuevo Material' })
    }

    useEffect(() => {
        if (eliminarConfirm) {
            m._id = id
            m.deleteMaterial(m)
                .then(resp => {
                    const newData = data.filter(s => s.IDMaterial !== id)
                    setData(newData)
                })
        }
        setEliminar(false)
    }, [eliminarConfirm, data, m, id])

    const handleCloseModalConfirmacion = useCallback(() => {
        setShowModalConfirmacion(!showModalConfirmacion)
    }, [showModalConfirmacion])

    const eliminar = useCallback((e) => {
        handleCloseModalConfirmacion()
        setId(parseInt(e.target.parentNode.id))
        setEliminar(false)
    }, [handleCloseModalConfirmacion])


    return (
        <>
            <div className='container container-inventario'>
                <h1>Inventario</h1>
                <div className='body-inventario'>
                    <div className='col text-end'>
                        <button className='btn btn-success' onClick={newMaterial}>+Nuevo Material</button>
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
                    <ModalMaterial
                        estado={modalMaterial.estado}
                        title={modalMaterial.title}
                        handleClose={handleCloseModalMaterial}
                    />
                </div>
            </div>
        </>
    )
}

export default Inventario