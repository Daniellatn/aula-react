import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

const array = () => {

  const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo', 'Voyage', 'Onix'] // Array
  const pessoa = {nome: 'Daniella', idade: 26, telefone: '(61) 99142-3283'} // Objeto

  return (
    <>
      <Pagina titulo="Array">
        <Container>
          <h1> Lista orenada de carros </h1>

          <ol>
            {carros.map(result => (
                <li>{result}</li>
            ))}
          </ol>

        </Container>
      </Pagina>
    
    </>
  )
}

export default array