import React from 'react';
import NavList from '../NavList/NavList'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='container'>
            <h1 className='logo'>Techaton</h1>
            <div>
                <NavList />
            </div>

        </div>
    )
}

export default NavBar