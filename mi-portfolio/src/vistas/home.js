import React from "react"
import NavBar from "../componentes/NavBar"
import office from "../public/office.jpg"
import logo from "../public/logo.png"

function Home(){
    return(
        <div style={{height:"100vh"}}>
            <img style={{width:"100vw",height:"100vh",position:"fixed",zIndex:"-1",top:"0",left:"0"}}src={office}/>
            <NavBar/>
            <div className="d-flex w-100 mh-100 justify-content-around mt-4 mb-0">
                <img src={logo} style={{width:"45%",height:"500px"}}/>

                <p style={{backgroundColor:"rgba(0, 0, 0, 0.3)",fontSize:"24px",width:"50%", padding:"35px 20px",color:"white",textAlign:"justify"}}>Estudiante de sistemas de la Universidad Nacional de General Sarmiento, en busca de nuevos desafíos en una empresa donde pueda aportar valor desde mi experiencia y conocimientos dentro del área de Fullstack Development. Me especializo en MongoDB, Express, React y Node.jsm, aunque gané algo de experiencia con Java luego de trabajar con ese lenguaje durante 3 años en la universidad, mi interés por el ecosistema javascript se despertó luego de que comencé a investigar sobre las tecnologías mas utilizadas del mercado y las ventajas que estas proporcionan al desarrollador.</p>
    
            </div>
        </div>
    );
}

export default Home