import  { useEffect, useState } from "react";
//import axios from 'axios'
import { useGlobalStates } from '../Context/Context'
import {Link} from 'react-router-dom'



const Card = ({ name, username, id }) => {

  const { theme, handleChangeTheme } = useGlobalStates();
  const [favoritos,setFavoritos] = useState({})

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
      return localStorage.getItem()
  }
  

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}



      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <Link to={'/detail/' + id} key={id}>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <h4>{id}</h4>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
