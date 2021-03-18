import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.style.scss'


const Navbar = () => {
    return(
        <nav className='Navbar'>
            <h2 className='Navbar-logo'>
              <Link to='/'>SHOP APP</Link>  
            </h2>
            <ul className='Navbar-list'>
                <li className='Navbar-list-item'>
                    <Link to='/cart'>Cart</Link>
                </li> 
                <li className='Navbar-list-item'>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;