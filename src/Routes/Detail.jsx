
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistaStates } from '../Context/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // const [dentista, setDentista] = useState({})
  const {state, dispatch} = useDentistaStates()
  const params = useParams()
  const {name, email, phone, website} = state.dentista


  // const {favs, setFavs} = useRecipeStates()
  //  console.log(favs)

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
    axios(url)
      // .then(res => setDentista(res.data))
      .then(res => dispatch({type: 'GET_DENTISTA', payload: res.data}))
  }, [])

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detalle</h1>
      <div>
        <h1>Nombre: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Teléfono: {phone}</h1>
        <h1>Sitio Web: {website}</h1>
      </div>
    </>
  )
}

export default Detail