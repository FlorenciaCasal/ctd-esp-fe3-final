import React from "react";
import { useDentistaStates } from "../Context/Context";
 import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  // return (
  //   <>
  //     <h1>Dentists Favs</h1>
  //     <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        const {favs} = useDentistaStates()
        console.log(favs)
        return (
        <div>
          {/* {favs} */}
          {favs.map(fav => <Card dentista={fav} key={fav.id} />)}
        </div>

    //   </div>
    // </>
  )
}

export default Favs
