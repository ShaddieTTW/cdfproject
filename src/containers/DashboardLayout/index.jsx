import React from "react";
import Logo from "../../components/Logo";
import { NavLink, Outlet } from "react-router-dom";
import { BsGridFill,BsDashSquareFill } from "react-icons/bs";

const DashboardLayout = () =>{
    return (
        <>
            <div className="dash-top">

            </div>
            <aside className="text-white">
                <div className="dash-logo">
                    <Logo className="text-white"/>
                </div>
                <div className="dash-links">

                    <div className="shadow rounded links">
                        <NavLink  to="/admin/"  className="link shadow rounded">
                            <span>Dashboard</span>
                            <BsGridFill/>
                        </NavLink>
                        <NavLink to="/admin/projects" className="link shadow rounded">
                            <span>Projects</span>
                            <BsDashSquareFill/>
                        </NavLink>
                    </div>
                </div>
            </aside>
            <div className="dash-main">
                <Outlet/>
            </div>
        </>
    )

}

export default DashboardLayout;