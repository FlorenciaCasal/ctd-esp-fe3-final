import React from 'react'
import Form from '../Components/Form'
 import { useGlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme, handleChangeTheme } = useGlobalStates();

  return (
    <div className='contact'>
      <h2>¿Quiere saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact