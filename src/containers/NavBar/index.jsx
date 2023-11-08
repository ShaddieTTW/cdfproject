import React from "react"
import NavLinks from "../NavLinks"
import Logo from "../../components/Logo"


const NavBar = () =>{
    return(
        <div class="all-width">
            <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <Logo theme="grey-color" root="/" />
                <NavLinks/>
            </nav>
        </div>
        
    )
}

export default NavBar