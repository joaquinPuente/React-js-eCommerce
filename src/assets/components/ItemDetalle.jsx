import React from 'react'
import {
MDBCard,
MDBCardBody,
MDBCardTitle,
MDBCardText,
MDBCardImage} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../service/DataProvider';

export const ItemDetalle = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([]);
    const params = useParams()

    
    
    useEffect(()=>{
        productos.forEach( (producto) => {
            
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        });
    }, [params.id,productos]
    )

    



  return (
    <div className='itemDetalle'>
        <MDBCard className='mb-3'>
        <MDBCardImage className='imgDetalle' position='top' src={detalle.image} alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{detalle.title}</MDBCardTitle>
          <MDBCardText>
            Breve descripcion del producto
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Precio:{detalle.price}</small>
          </MDBCardText>

          <Button className='me-2' variant="primary">Comprar</Button>       
        <Button className='me-2' variant="secondary">
          <Link to={`/productos`} className='linkTo1'>
            Volver
          </Link>        
          </Button>

        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
