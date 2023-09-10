import Card from '../Components/Card'
import { useGlobalStates } from '../Context/Context'
import React, { useEffect, useState} from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, handleChangeTheme } = useGlobalStates();

  const [dentistas,setDentista] = useState({})
  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    fetch(url).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      setDentista(data)
    })

  },[])

  return (
    <main className="" >
      
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentista) => <Card name={dentista.name} username={dentista.username} id={dentista.id}/>)}
        
      </div>
    </main>
  )
}

export default Home