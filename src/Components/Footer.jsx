import React from 'react'
import DH from "../img/DH.png"
import FB from "../img/ico-facebook.png"
import IN from "../img/ico-instagram.png"
import TT from "../img/ico-tiktok.png"
import WP from "../img/ico-whatsapp.png"



const Footer = () => {
  return (
    <footer  >
      <div className='logDH'>
        <img className='dh' src={DH} />
      </div>
      <div className='logosredes'>
        <h2>Florencia Casal & Luz Acosta  </h2>
        <div className='redes1'>
          <a href="https://www.facebook.com">
            <img className='redes' src={FB} alt="" />
          </a>
          <a href="http://www.instagram.com">
            <img className='redes' src={IN} alt="" />
          </a>
          <a href="http://www.tiktok.com">
            <img className='redes' src={TT} alt="" />
          </a>
          <a href="http://www.whatsapp.com">
            <img className='redes' src={WP} alt="" />
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
