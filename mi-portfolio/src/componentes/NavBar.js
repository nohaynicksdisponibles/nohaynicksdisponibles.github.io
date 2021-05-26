import React, { useEffect } from "react"
import logo from "../public/logo.png"
import {NavLink} from "react-router-dom"

const active={
    border:"1px solid white"
}

function NavBar(props){

    useEffect(()=>{/*
        if(props.elemento=="about"){

        }

        if(props.elemento=="proyects"){

        }

        if(props.elemento=="contact"){

        }*/
    })

    return(
        <div style={{display:"flex"}}>
            <img src={logo} style={{width:"100px"}}/>
            <span style={{flexGrow="1"}}></span>
            
            <NavLink id="about" to="/" activeStyle={active}>
                <span style={{color:"white",fontSize:"16px"}}>ABOUT ME</span>
            </NavLink>
            <NavLink id="proyects" to="/proyects" activeStyle={active}>
                <span style={{color:"white",fontSize:"16px"}}>PROYECTS</span>
            </NavLink>
            <NavLink id="contact" to="/contact" activeStyle={active}>
                <span style={{color:"white",fontSize:"16px"}}>CONTACT ME</span>
            </NavLink>
        </div>
    );
}

export default NavBar