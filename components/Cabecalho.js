import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <> 
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/array">Array</Nav.Link>
            <Nav.Link href="/objeto">Carros</Nav.Link>
            <Nav.Link href="/filmes">Filmes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho


// <>      </> Fragmento