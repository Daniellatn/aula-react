import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Cabecalho from './Cabecalho'

const Pagina = (props) => {

  //console.log(props)

  return (
    <>
      <Cabecalho />
      <div className='bg-secondary text-white py-2 text-center mb-3'>
        <Container> 
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

      <Card.Footer style={{width: '100%'}} className="text-white text-center bg-secondary position-fixed bottom-0 p-2">Todos os direitos reservados®</Card.Footer>

    </>
    
  )
}

export default Pagina