// import  { useEffect, useState } from "react";
//import axios from 'axios'
// mport { useGlobalStates } from '../Context/Context'
import {Link} from 'react-router-dom'
import { useDentistaStates } from "../Context/Context";
import DC from "../img/doctor.jpg"



// const Card = ({ name, username, id }) => {

const Card = ({dentista}) => {
  // const {favs, setFavs} = useDentistaStates()
  const {state, dispatch} = useDentistaStates()
  const findDentista = state.favs.find(fav => fav.id == dentista.id)


   const addFav = () => {
     // Aqui iria la logica para agregar la Card en el localStorage
    
      // if (favs.find((dentFavoritos)=>dentFavoritos.id === dentista.id)){
      //   alert("ya existe")
      // }else{
      //   setFavs((prevFavs) => [...prevFavs, dentista]);
      //   alert("Se agregó correctamente a Favoritos")
      // }
      if(findDentista){
        //  deleteFav es un array nuevo con el elemento filtrado
        dispatch({type: 'DELETE_FAV', payload: findDentista})
      } else {
        dispatch({type: 'ADD_FAV', payload: dentista})
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
       <button onClick={addFav} className="favButton">{findDentista ? '💗' : '🖤'}</button> 
      {/*<button onClick={() => setFavs((prevFavs) => [...prevFavs, dentista])}>💗</button>*/}
    </div>
  );
};

export default Card;