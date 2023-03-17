import './index.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function CardService({ nombre, subtitle, img, descripcion, descripcionL }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [select, setselected] = useState ('card2')
  const selected = () => setselected ('card')
  return (
    <>
      <div className='content'>
        <article className={select} onClick={selected}>
          <div className='temporary_text'>{nombre}
            <img className='imagen' src={img} alt="" />
          </div>
          <div className='card_content'>
            <span className='card_title'>{nombre}</span>
            <span className='card_subtitle'>{subtitle}</span>
            <p className='card_description'>{descripcion}</p>
            <div className='card_description'>
              <Button className='card-button' variant="primary" onClick={handleShow}>
                Más información
              </Button>
            </div>
          </div>
        </article >
      </div >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{descripcionL}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Entendido!
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}


