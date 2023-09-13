// import  { useEffect, useState } from "react";
//import axios from 'axios'
// mport { useGlobalStates } from '../Context/Context'
import {Link} from 'react-router-dom'
import { useDentistaStates } from "../Context/Context";
import DC from "../img/doctor.jpg"



// const Card = ({ name, username, id }) => {

const Card = ({dentista}) => {
  const {favs, setFavs} = useDentistaStates()

   const addFav = () => {
     // Aqui iria la logica para agregar la Card en el localStorage
     console.log(favs)
     console.log(dentista.id)
     //const dentistaAgregado= {...favs, dentista}
      if (favs.find((dentFavoritos)=>dentFavoritos.id === dentista.id)){
        alert("ya existe")
      }else{
        setFavs((prevFavs) => [...prevFavs, dentista]);
        alert("Se agregó correctamente a Favoritos")
      }
   }
 



  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <Link to={'/detail/' + dentista.id} >

        <img src={DC} alt='foto'/>
      </Link>
        <div className='texCard'>
          <h2>{dentista.name}</h2>
          <h3>{dentista.username}</h3>
        </div>
        

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       <button onClick={addFav} className="favButton">💗</button> 
      {/*<button onClick={() => setFavs((prevFavs) => [...prevFavs, dentista])}>⭐</button>*/}
    </div>
  );
};

export default Card;
