import React from "react";
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Twitter from '../images/Twitter.png'
import Github from '../images/Github.png'

export default function Footer(){
  return(
      <div className="footer">
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Github} alt="Github" />

      </div>
      
  )  
}