import React from 'react'
import { DataContext } from '../../service/DataProvider'
import { useContext } from 'react'
import Item from './Item'


const ItemList = () => {
  
 const value = useContext(DataContext)
 const [productos] = value.productos
 
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