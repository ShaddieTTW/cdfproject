import React from "react";
import { NavLink } from "react-router-dom";
import { IconName } from "react-icons/bs";

const NavLinks = () =>{

    return(
    <div className="nav-links">
        <div>
            <NavLink to="/" className="px-4 py-2 text-sm">Home</NavLink>
            <NavLink to="about" className=" px-4 py-2 text-sm">About</NavLink>
            <NavLink to="contact" className=" px-4 py-2 text-sm">Contacts</NavLink>
            <NavLink to="more" className=" px-4 py-2 text-sm">More</NavLink>
        </div>
        <div>
            <NavLink to="login" className="button-green bt-10 text-white px-4 py-2 text-sm">

                Login
            </NavLink>
        </div>
       
        
    </div>
    )
}

export default NavLinks;
