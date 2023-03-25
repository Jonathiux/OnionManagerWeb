import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col, FloatingLabel } from 'react-bootstrap'

function ModalMaterial({ title, estado, handleClose }) {

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true);
  }

  const exit = ()=>{
    handleClose()
    setValidated(false)
  }

  return (
    <>
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
                  required
                />
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cantidad"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Inserta una cantidad
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Descripción</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
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