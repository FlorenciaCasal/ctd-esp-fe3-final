import { Link, useNavigate } from 'react-router-dom'
// import React, { useContext } from 'react';
// import { ThemeContext } from '../Context/ThemeContext'
import '../Context/context.css'

import { useDentistaStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = (theme) => {

  const { toggleTheme } = useDentistaStates()
  // const { theme, handleChangeTheme } = useGlobalState();

  const enlaces = [
    { id: 1, titulo: 'Home', route: '/' },
    { id: 2, titulo: 'Contact', route: '/contact' },
    { id: 3, titulo: 'Favs', route: '/favs' },
  ]

  const navigate = useNavigate()

  return (
    <nav>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => navigate(-1)}> ⬅ </button>
        {enlaces.map((enlace) => (
          <Link to={enlace.route} key={enlace.id} >
            <h4 style={{ margin: 10 }} >{enlace.titulo}</h4>
          </Link>
        ))}
        <div className="theme">
          <button onClick={toggleTheme}>🌛🌞</button>
        </div>

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