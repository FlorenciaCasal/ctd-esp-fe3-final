
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [detail, setDetail] = useState({})
  // const {favs, setFavs} = useRecipeStates()
  //  console.log(favs)
  const { id } = useParams()
  console.log(id)

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios(url)
      .then(res => setDetail(res.data))
  }, [])

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detalle</h1>
      <div>
        <h1>Nombre: {detail.name}</h1>
        <h1>Email: {detail.email}</h1>
        <h1>Teléfono: {detail.phone}</h1>
        <h1>Sitio Web: {detail.website}</h1>
      </div> 
    </>
  )
}

export default Detail