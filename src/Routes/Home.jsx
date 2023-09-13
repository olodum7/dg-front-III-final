import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentistsState } = useContextGlobal();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        { dentistsState.dentists.map(dentist => (
          <Card dentist={dentist} key={dentist.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home