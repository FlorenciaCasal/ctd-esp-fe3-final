import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistaStates } from '../Context/Context'
import DC from "../img/doctor.jpg"



const Detail = () => {

  const { state, dispatch } = useDentistaStates()

  const params = useParams()

  const { name, email, phone, website } = state.dentista

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_DENTISTA', payload: res.data }))
  }, [])

  return (
    <div className='tab-container'>
      <h2>Detalle</h2>
      <img style={{ marginBottom: '10px' }} src={DC} alt="" />
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