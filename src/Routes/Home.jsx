import Card from '../Components/Card';
import React from "react";
import { useDentistaStates } from '../Context/Context';
import '../index.css'


const Home = () => {

  const { state } = useDentistaStates()

  return (
    <div className='card-grid'>
      {state.dentistas.map(dentista => (<Card dentista={dentista} key={dentista.id} />))}
    </div>
  )
}

export default Home