import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Logo from '../img/shoes.jpg'
import { DataContext } from '../../service/DataProvider'
import { useContext } from 'react'


const Item = ({id,title,price,image,category,cantidad}) => {
  console.log(id, title, price, image, category, cantidad)
  
  return (
    <div>
        <Card id={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Precio:{price}
        </Card.Text>
        <Button className='m-10' variant="primary">Comprar</Button>
        <Button className='m-10' variant="secondary">Comprar</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Item