import React from 'react'
import {
MDBCard,
MDBCardBody,
MDBCardTitle,
MDBCardText,
MDBCardImage} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const ItemDetalle = () => {

  return (
    <div className='itemDetalle'>
        <MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
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
