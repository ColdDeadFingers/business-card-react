import React from "react";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App(){
    return(
        <main className="main-container">
            <Head />
            <Main />
            <Footer />
        </main>
        
    )
}