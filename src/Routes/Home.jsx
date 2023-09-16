import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { dentistsState } = useContextGlobal();

  return (
    <main className={`${dentistsState.theme ? 'light' : 'dark'} py-20`}>
      <div className='card-grid'>
        { dentistsState.dentists.map(dentist => (
          <Card dentist={dentist} key={dentist.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home