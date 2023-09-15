import { useDentistaStates } from "../Context/Context";
import Card from "../Components/Card";
import '../index.css'


const Favs = () => {

  const { state } = useDentistaStates()

  return (
    <div className='card-grid'>
      {state.favs.map(fav => <Card dentista={fav} key={fav.id} />)}
    </div>
  )
}

export default Favs

