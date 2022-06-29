import React from 'react'
import Value from '../value/value'

const ValuesList = ({images}) => {
    return (
        <div>
          {
            images.map((item, i) => {
               return(
                <Value 
                src={images[i].image}
                text={images[i].text}
                />
               ) 
            })
          }
        </div>
    )
}

export default ValuesList