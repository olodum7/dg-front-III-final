import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import "./../styles.css";

const Detail = () => {

  const { dentistsState } = useContextGlobal();

  const [dentist, setDentist] = useState({})
  const params = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
  }, [])

  return (
    <div className={dentistsState.theme ? 'light' : 'dark'}>
      <h1>Detail Dentist id </h1>
      <h3>{dentist.name}</h3>
      <h3>{dentist.email}</h3>
      <h3>{dentist.phone}</h3>
      <h3>{dentist.website}</h3>
    </div>
  )
}

export default Detail