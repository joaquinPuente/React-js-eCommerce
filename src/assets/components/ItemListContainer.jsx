import React from 'react'
import '../../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const ItemListContainer = ( {greeting} ) => {
  return (
    <div>
        <ul className='itemList'>
            <li>
            <Link to='/'>
              {greeting}
            </Link>
            </li>
            <li>
              <Link to='/productos'>Todo</Link>
            </li>
            <Dropdown>

              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Urbanas</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Deportivas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Casuales</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
        </ul>
       
    </div>
  )
}

export default ItemListContainer