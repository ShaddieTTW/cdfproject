import React from "react";
import Logo from "../../components/Logo";
import { NavLink, Outlet } from "react-router-dom";
import { BsGridFill,BsDashSquareFill, BsBell, BsMessenger, BsEnvelope, BsArrowBarDown } from "react-icons/bs";
import FlyoutMenu from "../../components/NotificationBar";
import NotificationBar from "../../components/NotificationBar";

const DashboardLayout = () =>{
    return (
        <>
            <div className="dash-top shaddow ">
                <div>

                </div>
                <div className="flex ">
                    <NotificationBar/>
                    

                    <button className="icon-btn ml-2">
                        <BsEnvelope/>
                    </button>
                    <div className="flex ml-10">
                        <div>User Name</div>
                        
                    </div>
                </div>
            </div>
            <aside className="text-white">
                <div className="dash-logo">
                    <Logo root="/admin/" theme="text-white"/>
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