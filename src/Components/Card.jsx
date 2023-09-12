// import  { useEffect, useState } from "react";
//import axios from 'axios'
// mport { useGlobalStates } from '../Context/Context'
import {Link} from 'react-router-dom'
import { useDentistaStates } from "../Context/Context";




// const Card = ({ name, username, id }) => {

const Card = ({dentista}) => {
  const {favs, setFavs} = useDentistaStates()

  // const addFav = () => {
  //   // Aqui iria la logica para agregar la Card en el localStorage
  //   setFavs([...favs, dentista])
  // }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <Link to={'/detail/' + dentista.id}>
        <h2>{dentista.name}</h2>
        <h3>{dentista.username}</h3>
        <h1>{dentista.id}</h1>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {/* <button onClick={addFav} className="favButton">Add fav</button> */}
      <button onClick={() => setFavs((prevFavs) => [...prevFavs, dentista])}>⭐</button>
    </div>
  );
};

export default Card;
