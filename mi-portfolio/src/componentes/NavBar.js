import React, { useEffect } from "react"

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
           
            <span style={{flexGrow:"1"}}></span>
            
            <NavLink id="about" to="/" activeStyle={active} style={{textDecoration:"none", padding:"10px 15px"}}>
                <span style={{color:"white",fontSize:"16px"}}>ABOUT ME</span>
            </NavLink>
            <NavLink id="proyects" to="/proyects" activeStyle={active} style={{textDecoration:"none", padding:"10px 15px"}}>
                <span style={{color:"white",fontSize:"16px"}}>PROYECTS</span>
            </NavLink>
            <NavLink id="contact" to="/contact" activeStyle={active} style={{textDecoration:"none", padding:"10px 20px"}}>
                <span style={{color:"white",fontSize:"16px"}}>CONTACT ME</span>
            </NavLink>
        </div>
    );
}

export default NavBar