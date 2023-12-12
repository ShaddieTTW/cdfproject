import React from "react";
import { Link } from "react-router-dom";


const Logo = (props) =>{
    return(
        props.large ?
        <Link to={props.root}>
            <h1 className="nav-logo large" >
                <span className={props.theme}>C</span>D<span>F</span>
            </h1>
        </Link>
        :
        <Link to={props.root}>
            <h1 className="nav-logo" >
                <span className={props.theme}>C</span>D<span>F</span>
            </h1>
        </Link>
    )
}

export default Logo;