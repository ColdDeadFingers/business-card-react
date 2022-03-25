import React from "react";

export default function Main(){
    return(
        <div className="backgroundmain">

            <div className="main-content-area">
            <h1 className="userName">Mayowa Makanjuola</h1>
            <h3 className="userRole">Frontend Developer</h3>
            <h4 className="userWebsite">mayowa-mi.netlify.app</h4>

            <div className="buttonGroup">
            <button className="userEmail">Email</button>
            <button className="userLinkedIn">LinkedIn</button>
            </div>
            
            <h2 className="about">About</h2>
            <p className="contentpar">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security
                and best practices, and  am always looking for new things to learn.
            </p>

            <h2 className="about">Interests</h2>
            <p className="contentpar">
                Food expert. Music scholar. Reader. Internet Fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
            </div>



        </div>
    )
}