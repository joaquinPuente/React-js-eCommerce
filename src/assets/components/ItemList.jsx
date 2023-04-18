import React, { useState } from 'react'
import { DataContext } from '../../service/DataProvider'
import { useContext } from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'


const ItemList = () => {
  
 const value = useContext(DataContext)
 const [productos] = value.productos
 //

 const cat = productos;

 cat.map( (c) => {
  c.category
  console.log(c.category)
})
 

   return (
    <div className='containerCartas'>
            {
              productos.map((producto) =>
               {return (
                <Item 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
                
               )
              })
						}
    </div>
  )
}

export default ItemList