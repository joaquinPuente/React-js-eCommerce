import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/sneaker.png"


const Brand = () => {
  return (
    <Link to='/'className='linkTo'> <div className='brandLogo'>
     
      <img src={Logo} alt="" />
        <h2>Sneakers Top</h2>
      
      
        
    </div></Link>
  )
}

export default Brand