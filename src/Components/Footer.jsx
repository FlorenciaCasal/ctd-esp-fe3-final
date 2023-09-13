import React from 'react'
import DH from "../img/DH.png"



const Footer = () => {
  return (
    <footer style={{display: 'flex', justifyContent: 'end'}} >
      <div>
        <h2>Florencia Casal & Luz Acosta  </h2>
      </div>
      <div>
        <h5>Powered by</h5>
        <img src={DH}/>
      </div>
      
    </footer>
  )
}

export default Footer
