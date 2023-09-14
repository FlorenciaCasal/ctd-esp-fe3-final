// import React, { useState } from "react";
import { useDentistaStates } from "../Context/Context";
 import Card from "../Components/Card";
import { useEffect, useState } from "react";
//  import  { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  // return (
  //   <>
  //     <h1>Dentists Favs</h1>
  //     <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        //  const [reiniciar,setReiniciar]= useState(false)

        // useEffect(()=>{
          
        //   localStorage.clear()
        //   window.location.reload()
        // },[reiniciar])
      

        
         const {favs} = useDentistaStates()
        
        return (
        <div >
          <div>
            {/* { <button styleonClick={setReiniciar()}>Reiniciar Favoritos</button> }
          </div> */}
          <div className='card-grid'>
           {favs.map(fav => <Card dentista={fav} key={fav.id} />)}

          </div>
          
        </div>

    //   </div>
    // </>
  )
}

export default Favs
