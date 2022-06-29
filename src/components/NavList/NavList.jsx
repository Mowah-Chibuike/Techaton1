import React from 'react'
import NavLink from '../NavLink/NavLink'
import './NavList.css'

const NavList = () => {
    return (
        <div className='nav-list'>
                <NavLink  text="Home"/>
                <NavLink  text="Sign Up"/>
        </div>
    )
}

export default NavList