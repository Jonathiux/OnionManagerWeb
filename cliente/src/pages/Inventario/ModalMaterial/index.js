import ToastAlert from 'componentes/ToastAlert'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form, Row, Col, FloatingLabel } from 'react-bootstrap'

import Material from 'services/materiales'

function ModalMaterial({ id = null, title, estado, handleClose, data }) {

  const [toastAlert, setToastAlert] = useState({ color: null, estado: false, msg: null })
  const [validated, setValidated] = useState(false)
  const refNombre = useRef()
  const refDescripcion = useRef()
  const refCantidad = useRef()

  const handleToast = () => {
    setToastAlert({ estado: !toastAlert.estado })
  }

  useEffect(() => {
    if (id) {
      const m = new Material({ id: id })
      m.getSingleMaterial(m)
        .then(resp => {
          refCantidad.current.value = parseInt(resp[0].Cantidad)
          refDescripcion.current.value = resp[0].Descripcion
          refNombre.current.value = resp[0].Nombre
          console.log(resp)
        })
    }
  }, [id])

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()

    } else {
      const m = new Material({
        id: id,
        cantidad: refCantidad.current.value,
        descripcion: refDescripcion.current.value,
        nombre: refNombre.current.value,
      })

      if (title === 'Editar Material') {
        let IDMaterial = id
        m.putMaterial(m)
        .then(resp => {
          if (resp.error) {
            setToastAlert({ color: 'warning', estado: true, msg: resp.error })
          } else {
            exit()
              setToastAlert({ color: 'info', estado: true, msg: resp.msg })
              data(data => {
                const newArray = data.map(material => {
                  if (material.IDMaterial === IDMaterial) {
                    console.log('editando')
                    // Actualizar el material
                    return {
                      ...material, // Copiar todas las propiedades del material original
                      Cantidad: refCantidad.current.value,
                      Descripcion: refDescripcion.current.value,
                      Nombre: refNombre.current.value,
                    }
                  } else {
                    // No es el material que se quiere actualizar, devolver el original
                    return material
                  }
                })

                console.log(newArray) // El nuevo arreglo con el material actualizado
                return newArray
              })
            }
          })
      } else {
        m.postMaterial(m)
          .then(resp => {
            if (resp.error) {
              setToastAlert({ color: 'warning', estado: true, msg: resp.error })
            } else {
              exit()
              setToastAlert({ color: 'info', estado: true, msg: resp.msg })
              data(currentData => {
                const newMaterial = {
                  Cantidad: refCantidad.current.value,
                  Descripcion: refDescripcion.current.value,
                  IDMaterial: resp.id,
                  Nombre: refNombre.current.value,
                  estado: 1
                }
                console.log(currentData)
                return [...currentData, newMaterial]
              })
            }
          })
      }
    }

    setValidated(true)
  }

  const exit = () => {
    id = null
    handleClose()
    setValidated(false)
  }

  return (
    <>
      <ToastAlert
        color={toastAlert.color}
        estado={toastAlert.estado}
        mensaje={toastAlert.msg}
        handleEstado={handleToast}
      />
      <Modal
        show={estado}
        onHide={exit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} /* onSubmit={handleSubmit} */>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de Material"
                  ref={refNombre}
                  required
                />
                {/* <Form.Control.Feedback>Muy bien!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cantidad"
                  ref={refCantidad}
                  required
                />
                {/* <Form.Control.Feedback type="invalid">
                  Inserta una cantidad
                </Form.Control.Feedback> */}
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label>Descripción</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  ref={refDescripcion}
                  required
                />
                {/* <Form.Control.Feedback>Bien!</Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>
            {/* <Button type="submit">Submit form</Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={exit}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalMaterial