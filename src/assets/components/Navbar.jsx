import React from 'react'
import Brand from './Brand'
import Itemlist from './Itemlist'
import Carrito from './Cart'



const Navbar = () => {
  return (
    <div className='navBar'>
        <Brand/>
        <Itemlist greeting="Inicio"/>
        <Carrito/>
        
    </div>
  )
}

export default Navbar