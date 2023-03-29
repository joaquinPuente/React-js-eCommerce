import React from 'react'
import '../../App.css'

const Itemlist = ( {greeting} ) => {
  return (
    <div>
        <ul className='itemList'>
            <li>{greeting}</li>
            <li>Categorias</li>
            <li>Todo</li>
        </ul>
        
    </div>
  )
}

export default Itemlist