import React, { useState } from 'react';

function ContactForm() {
  const [usuario, setUsuario] = useState({ nombre: '', email: '', comentarios: '' });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (usuario.nombre.trim().length < 6 || usuario.nombre !== usuario.nombre.trim()) {
      setMensaje('El nombre debe tener al menos 6 caracteres y no debe contener espacios al final.');
      setError(true)
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(usuario.email)) {
      setMensaje('El email ingresado no es válido.');
      setError(true)
    } else {
      setMensaje(`Gracias ${usuario.nombre} te contactaremos cuanto antes vía mail`);
      setError(false)
      console.log("👨🏼👩🏼usuario: " + usuario.nombre.trim() + " 📧mail: " + usuario.email + " 📣comentarios: " + usuario.comentarios)
      setUsuario({ nombre: '', email: '', comentarios: '' })
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      {/* <div className="formContact"> */}
        <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" value={usuario.nombre} onChange={handleInputChange} required />
        <input type="email" id="email" name="email" placeholder="Email" value={usuario.email} onChange={handleInputChange} required />
        <textarea rows={10}  id="comentarios" name="comentarios" placeholder="Comentarios" value={usuario.comentarios} onChange={handleInputChange} required />
      
        <button className="enviar" ype="submit">Enviar</button>
      

      {/* <div className="textoErrExit"> */}
        {mensaje && <h4 className="msmexito">{mensaje}</h4>}
        {error && <h3 className="msmerror">Por favor verifique su información nuevamente</h3>}
      {/* </div> */}
    </form>

  );
}

export default ContactForm;