import React from "react"
import NavBar from "../componentes/NavBar"
import office from "../public/office"

function Home(){
    return(
        <div style={{width:"100%",height:"100%",backgroundImage:office}}>
            <NavBar/>
            <div className="d-flex w-100 justify-content-center">
                <span>Home</span>
            </div>
        </div>
    );
}

export default Home