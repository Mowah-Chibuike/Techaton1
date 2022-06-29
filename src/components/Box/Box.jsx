import React from "react";
import './Box.css'
import Value from '../value/value'
import images from "../images/images";

const Box = () => {
    return (
        <div className="box">
            <Value src={'../images/3440660.jpg'}/>
            <Value />
            <Value />
            <Value />
        </div>
    )
}

export default Box