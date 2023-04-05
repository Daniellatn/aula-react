import React, { useEffect, useState } from 'react'
import api from '../services/api'


const listagem = () => {
  const [deputados, setDeputados] = useState([])

  useEffect(() =>  {
    api.get('/deputados').then(result => {
      setDeputados(result.data.dados);
    }) 
  }, [])

  return (
    <>
      <div>listagem</div>
      {deputados.map(item => (
        <img title={item.nome} key={item.id} src={item.urlFoto} />
      ))}
    </>
  )
}

export default listagem