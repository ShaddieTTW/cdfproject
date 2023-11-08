import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

const MasterLayout = () =>{
    return (
        <div>
            <header className='shadow-sm'>
                <NavBar />
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
       
    )
}
export default MasterLayout;