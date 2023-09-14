import React from "react";
import { useState } from "react";



const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    // Estados:
    const [usuario, setUsuario] = useState({
        nombreCompleto: '',
        email: '',
        comentarios: ''

    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    // Manejador de eventos:

    const handleSubmit = (e) => {
        e.preventDefault()

        const nombreSinEspacios = usuario.nombreCompleto.trim();
        const emailSinEspacios = usuario.email.trim();
        const cajacomentarios = usuario.comentarios.trim();
        const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);


        if ((nombreSinEspacios.length > 5) && (regex.test(emailSinEspacios))) {
            // && (cajacomentarios.length >3)
            setShow(true)
            setError(false)
            //   alert("👨🏼👩🏼usuario: " + usuario.nombreCompleto.trim() + " 📧mail: " + usuario.email + " 📣comentarios: " + usuario.comentarios)
            e.target.reset()
        }
        else {
            setShow(false)
            setError(true)

        }
    }


    return (

        // Pasamos el manejador al evento unSubmit

        <form onSubmit={handleSubmit} >

            <div className="formContact">
                <div>
                    <input type="text" id="nombreCompleto" placeholder="Nombre completo" onChange={(e) => setUsuario({ ...usuario, nombreCompleto: e.target.value })} />
                    <input type="email" id="email" placeholder="Email" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
                    <input type="textarea" id="Comentarios" maxLength="700" name="comentarios" placeholder="Comentarios" onChange={(e) => setUsuario({ ...usuario, comentarios: e.target.value })} />

                    {/* Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón */}

                </div>
                <button className="enviar">Enviar</button>


            </div>

            <div className="textoErrExit">

                {error && <h4 className="msmerror">Por favor verifique su información nuevamente</h4>}

                {show && <p className="msmexito">Gracias {usuario.nombreCompleto}, te contactaremos cuanto antes vía mail</p>}

            </div>

        </form>
    )
}


export default Form;
