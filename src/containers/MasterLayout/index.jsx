import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";
import MidBar from "../MidBar";

const MasterLayout = () =>{
    return (
        <div>
            <header className='shadow-sm'>
                <TopBar/>
                <MidBar/>
                <NavBar />
            </header>
            <main className="all-width">
                <Outlet/>
            </main>
        </div>
       
    )
}
export default MasterLayout;