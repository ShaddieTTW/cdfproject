import React from "react"
import { Link } from "react-router-dom"
import NavLinks from "../NavLinks"
import Logo from "../../components/Logo"


const NavBar = () =>{
    return(
        <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <Logo />
            <NavLinks/>
        </nav>
    )
}

export default NavBar