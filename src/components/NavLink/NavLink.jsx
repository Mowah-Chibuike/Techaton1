import React from 'react'
import './NavLink.css'

const NavLink = ({text}) => {
    return (
        <div className='link'><span>{text}</span></div>
    )
}

export default NavLink 