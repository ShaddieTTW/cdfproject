import React from "react";
import { NavLink } from "react-router-dom";


const Logo = () =>{
    return(
        <NavLink to="/">
            <h1 className="nav-logo">
                <span>C</span>D<span>F</span>
            </h1>
        </NavLink>
    )
}

export default Logo;