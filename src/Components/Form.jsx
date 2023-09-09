import React from "react";
import { useState } from "react";
import styles from './Form.module.css'



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

 // Estados:
 const [usuario, setUsuario] = useState({
  nombreCompleto: '',
  email: '',
 
})

const [show, setShow] = useState(false)
const [error, setError] = useState(false)

// Manejador de eventos:

const handleSubmit = (e) => {
  e.preventDefault()

  const nombreSinEspacios = usuario.nombreCompleto.trim();
  

  if ((nombreSinEspacios.length > 5)  && (usuario.email === /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {
     
      setShow(true)
      setError(false)     
      e.target.reset()       
  }
  else {
      setShow(false)
      setError(true)
  }
  }


return (

  // Pasamos el manejador al evento unSubmit

  <form onSubmit={handleSubmit} className={styles.formulario}>

      <div className={styles.formFondo}>

          <div className={styles.formInterior}>
              
              <input type="text" id="nombreCompleto" className={styles.input} placeholder="Nombre completo" onChange={(e) => setUsuario({ ...usuario, nombreCompleto: e.target.value })} />
          </div>
          <div className={styles.formInterior}>
              
              <input type="email" id="email" className={styles.input} placeholder="Email" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
          </div>
          

          {/* Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón */}

          <button className={styles.button}>Enviar</button>

      </div>

      <div className={styles.render}>

          {error && <h4 className={styles.error}>Por favor verifique su información nuevamente</h4>}


          {show && <p>Gracias {usuario.nombreCompleto}, te contactaremos cuanto antes vía mail</p> && console.log("Nombre completo: " + usuario.nombreCompleto + ". " + "Email: " + usuario.email )}
      </div>

  </form>
)
}


export default Form;
