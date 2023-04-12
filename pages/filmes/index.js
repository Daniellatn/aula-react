import React, { useState, useEffect } from 'react'
import Pagina from '../../components/Pagina'
import { Container } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'

const index = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    apiFilmes.get('/movie/popular').then(resultado => {
      setFilmes(resultado.data.results)
    }) // then é para tratar(processar) uma promise
  }, []) // O useEffect é composto por dois paramentros: o [] como segundo parametro significa que o useEffect só será executado ao recarregar a página

  return (
    <Pagina titulo="Filmes">
      <Container>
        <div> Filmes </div>

        {filmes.map(item => (
          <p key={item.id}> 
            {item.title} 
          </p>
        ))}
      </Container>
    </Pagina>
  )
}

export default index