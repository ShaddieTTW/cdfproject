import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () =>{
    return(
        <>
            <div class="dash-main-top">
                <h2>Projects</h2>
                <div  className="dash-bandcramp">
                    <NavLink to="/admin/">Dashboard</NavLink> / <span>Projects</span>
                </div>
            </div>
            <div className="dash-main-content">
                
            </div>
        </>
    )
}

export default Projects;