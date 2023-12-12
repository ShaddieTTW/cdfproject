import React from "react"
import NavLinks from "../NavLinks"


const NavBar = () =>{
    return(
        <div className="main-nav">
            <div className="all-width">
                <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                    <NavLinks/>
                </nav>
            </div>
        </div>
        
    )
}

export default NavBar