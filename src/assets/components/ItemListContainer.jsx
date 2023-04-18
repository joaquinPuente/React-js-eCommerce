import React from 'react'
import '../../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const ItemListContainer = ( {greeting} ) => {
  return (
    <div>
        <ul className='itemList'>
            <li>
            <Link to='/' className='linkTo'>
              {greeting}
            </Link>
            </li>
            <li>
              <Link to='/productos' className='linkTo'>Todo</Link>
            </li>
            <Dropdown>

              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <Link to='/urbanas' className='linkTo'>Urbanas</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                <Link to='/deportivas' className='linkTo'>Deportivas</Link>
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
        </ul>
       
    </div>
  )
}

export default ItemListContainer