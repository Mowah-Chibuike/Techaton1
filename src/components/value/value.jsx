import React from 'react'
import './value.css'

const Value = ({src, text}) => {
    return (
        <div>
            <img src= {`${src}`} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Value