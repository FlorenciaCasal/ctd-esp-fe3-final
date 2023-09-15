import { Link, useNavigate } from 'react-router-dom'
import '../Context/context.css'
import { useDentistaStates } from "../Context/Context";

const Navbar = () => {

  const {toggleTheme, state} = useDentistaStates()

  const enlaces = [
    { id: 1, titulo: 'Home', route: '/' },
    { id: 2, titulo: 'Contact', route: '/contact' },
    { id: 3, titulo: 'Favs', route: '/favs' },
  ]

  const navigate = useNavigate()

  return (
    <nav>

      <div className='navbar'>
        <div>
          <p className='dhOdonto'><span>DH</span> Odonto</p>
          <button onClick={() => navigate(-1)}> ⬅ </button>
        </div>
        <div className='menu'> 
        {enlaces.map((enlace) => (
          <Link to={enlace.route} key={enlace.id} >
            <h4  >{enlace.titulo}</h4>
          </Link>
        ))}
        <div className="theme">          
          <button onClick={toggleTheme}> {state.theme === 'dark' ? '🌞' : '🌛'}</button>          
        </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar