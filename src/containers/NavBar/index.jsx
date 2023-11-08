import React from "react"
import { Link } from "react-router-dom"
import NavLinks from "../NavLinks"
import Logo from "../../components/Logo"


const NavBar = () =>{
    return(
        <div>
            <div className="top-bar">lest</div>
            <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <Logo />
                <NavLinks/>
            </nav>
        </div>
        
    )
}

export default NavBar