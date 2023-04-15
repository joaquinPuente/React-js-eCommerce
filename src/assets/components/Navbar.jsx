import React from 'react'
import Brand from './Brand'
import ItemListContainer from './ItemListContainer'
import Carrito from './Cart'



const Navbar = () => {
  return (
    <div className='navBar'>
      
        <Brand/>
        <ItemListContainer greeting="Inicio"/>
        <Carrito/>
        
    </div>
  )
}

export default Navbar