import React from "react";
import Milan from '../images/Milan.png'

export default function Head(){
    return(
        <div className="img-container">
            <img src={Milan} alt="img" className="userImage" />
        </div>
    )
}