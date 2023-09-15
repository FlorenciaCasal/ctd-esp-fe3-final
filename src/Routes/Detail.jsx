
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistaStates } from '../Context/Context'
import DC from "../img/doctor.jpg"


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
    <div className='tab-container'>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
          <h2>Detalle</h2>
          <img style={{marginBottom:'10px'}} src={DC} alt="" />

      <div>
        <table>
          <tr>
            <td>Nombre: </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Teléfono: </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Sitio Web: </td>
            <td>{website}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Detail