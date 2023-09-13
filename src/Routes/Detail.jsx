import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [state, setState] = useState({})
  const params = useParams()

  const url = '' + params.id

  useEffect(() => {
    axios(url)
    .then(res => setState(res.data))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3></h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail