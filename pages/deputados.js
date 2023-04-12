import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiDepultados from '../services/apiDeputados'

const deputados = () => {

  const [deputados, setDeputados] = useState([])

  useEffect(() => {
    apiDepultados.get('/deputados').then(resultado => {
      console.log(resultado.data)
    })
  }, [])

  return (
    <div>deputados</div>
  )
}

export default deputados