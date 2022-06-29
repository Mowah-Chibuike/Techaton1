import React from 'react'
import NavBar from '../NavBar/NavBar'
import './hero.css'

const Hero = () => {
    return (
        <div className='main'>
            <NavBar/>
            <div className='content'>
                <h1>Welcome to Techaton</h1>
                <p>Mentorship and Open-Source</p>
            </div>
        </div>
    )
}

export default Hero