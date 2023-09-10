import React from "react";
import { useState } from "react";



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
        const emailSinEspacios = usuario.email.trim();
        const regex  = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);


        if ((nombreSinEspacios.length > 5) && (regex.test(emailSinEspacios))) {

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

        <form onSubmit={handleSubmit} >

            <div>

                <div>
                    <input type="text" id="nombreCompleto" placeholder="Nombre completo" onChange={(e) => setUsuario({ ...usuario, nombreCompleto: e.target.value })} />
                </div>

                <div>
                    <input type="email" id="email" placeholder="Email" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
                </div>

                {/* Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón */}

                <button>Enviar</button>

            </div>

            <div>

                {error && <h4>Por favor verifique su información nuevamente</h4>}

                {show && <p>Gracias {usuario.nombreCompleto}, te contactaremos cuanto antes vía mail</p>}
            </div>

        </form>
    )
}


export default Form;
