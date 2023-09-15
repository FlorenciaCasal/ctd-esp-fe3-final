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

    // Validación del nombre (al menos 5 caracteres y sin espacios al final)
    if (usuario.nombre.trim().length < 5 || usuario.nombre !== usuario.nombre.trim()) {
      setMensaje('El nombre debe tener al menos 5 caracteres y no debe contener espacios al final.');
      setError(true)
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(usuario.email)) {
      // Validación del email (estructura correcta)
      setMensaje('El email ingresado no es válido.');
      setError(true)
    }else{
        // Si pasa las validaciones, mostrar el mensaje de agradecimiento
        setMensaje(`Gracias ${usuario.nombre} por tus comentarios. te contactaremos cuanto antes vía mail.`);
        setError(false)
        console.log("👨🏼👩🏼usuario: " + usuario.nombre.trim() + " 📧mail: " + usuario.email + " 📣comentarios: " + usuario.comentarios)
        setUsuario({ nombre: '', email: '', comentarios: '' })
    }
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <div className="formContact">
          <input type="text" id="nombre" name="nombre" value={usuario.nombre} onChange={handleInputChange} required/>
          <input type="email" id="email" name="email" value={usuario.email} onChange={handleInputChange} required />
          <textarea rows={10} cols={30} id="comentarios" name="comentarios" value={usuario.comentarios} onChange={handleInputChange} required />
        </div>
        
        <div>
          <button className="enviar" ype="submit">Enviar</button>
        </div>
      
      <div className="textoErrExit">
        {mensaje && <p>{mensaje}</p>}
        {error && <h4 className="msmerror">Por favor verifique su información nuevamente</h4>}
      </div>
      </form>
    
  );
}

export default ContactForm;