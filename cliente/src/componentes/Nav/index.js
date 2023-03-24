import {Button, Container, Form, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import './index.css'
import logo from 'iconos/logo.png'

function OffcanvasExample() {

    const expand = false
    
  return (
    <>
        <Navbar key={expand} bg="light" expand={expand} className="" style={{minWidth:'300px'}}>
          <Container fluid>
            <img alt='Logo' src={logo} style={{height:'80px'}} />
            <Navbar.Brand href="#">Onion Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to={'/'}>Inicio</NavLink>
                  <NavLink className="nav-link" to={'/crear-servicio'}>Nuevo Servicio</NavLink>
                  <NavLink className="nav-link" to={'/mi-cuenta'}>Mi cuenta</NavLink>

                  <NavLink className="nav-link" to={'/home-admin'}>Agenda-admin</NavLink>
                  <NavLink className="nav-link" to={'/servicios-admin'}>ServiciosAdmin</NavLink>
                  <NavLink className="nav-link" to={'/inventario'}>Inventario</NavLink>
                  <NavLink className="nav-link" to={'/finanzas'}>Finanzas</NavLink>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample