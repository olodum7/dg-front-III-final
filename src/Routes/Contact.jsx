import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const {dentistsState} = useContextGlobal()

  return (
    <main className={`${dentistsState.theme ? 'light' : 'dark'} py-20 mx-auto md:flex md:items-center md:justify-center w-full flex-col min-h-[86vh]`}>
      <Form/>
    </main>
  )
}

export default Contact