import {Button, Container, Form, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function OffcanvasExample() {

    const expand = false
  return (
    <>
        <Navbar key={expand} bg="light" expand={expand} className="" style={{minWidth:'300px'}}>
          <Container fluid>
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
                  <Link className="nav-link" to={'/'}>Inicio</Link>
                  <Link className="nav-link" to={'/inventario'}>Inventario</Link>
                  <Link className="nav-link" to={'/finanzas'}>Finanzas</Link>
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

export default OffcanvasExample;