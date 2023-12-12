import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () =>{

    return(
    <div className="nav-links flex justify-center">
        <div className="flex justify-center">
            <NavLink to="about" className="nav-link px-2 text-sm">Business News</NavLink>
            <NavLink to="contact" className="nav-link px-2 text-sm">Constructions</NavLink>
            <NavLink to="more" className="nav-link  px-2 text-sm">Homes and Business</NavLink>
            <NavLink to="more" className="nav-link  px-2 text-sm">Constituences</NavLink>
            <NavLink to="more" className="nav-link  px-2 text-sm">Projects</NavLink>
        </div>
    </div>
    )
}

export default NavLinks;
