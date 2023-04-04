import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Cabecalho from './Cabecalho'

const Pagina = () => {
  return (
    <>
      <Cabecalho />
      <div className='bg-secondary text-white py-3 text-center mb-3'>
        <Container> 
          <h1>Página Inicial</h1>
        </Container>
      </div>

      <Card.Footer style={{width: '100%'}} className="text-white text-center bg-secondary bottom-0 p-2">Todos os direitos reservados®</Card.Footer>

    </>
    
  )
}

export default Pagina