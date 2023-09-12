import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useGlobalState } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

 // const { theme, handleChangeTheme } = useGlobalState();

  const enlaces = [
    { titulo: 'Home', route: '/' },
    { titulo: 'Contact', route: '/contact' },
    // { titulo: 'Detail', route: '/detail' },
    { titulo: 'Favs', route: '/favs' }

  ]

  const navigate = useNavigate()

  return (
   <nav>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => navigate(-1)}> ⬅ </button>
        {enlaces.map((enlace, indice) => (
          <Link to={enlace.route} key={indice} >
            <h4 style={{ margin: 10}} >{enlace.titulo}</h4>
          </Link>
        ))}


      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      {/* <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}>
        Change Theme
      </button> */}

    </nav>
  )
}

export default Navbar