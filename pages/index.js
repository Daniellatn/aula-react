import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página Inicial" nome="Daniella">
        <Container>
          <h1>Hello World</h1>
          <p>Paragrafo 1</p>
          <p>Paragrafo 2</p>
          <p>Paragrafo 3</p>
          <p>Paragrafo 4</p>
        </Container>s
      </Pagina>


    </>
  )
}

// <>      </> Fragmento