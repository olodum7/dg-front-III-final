import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from "../Components/utils/global.context";
import "./../styles.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {dentistsState} = useContextGlobal()

  return (
    <main className={dentistsState.theme ? 'light' : 'dark'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact