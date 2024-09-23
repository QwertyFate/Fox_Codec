import React from "react";
import LogoPic from "../Pictures/Landing_Page/logo.png"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
       <Link to={"/"}> <img src={LogoPic} className='z-10 lg:w-[400px] w-64 relative mt-[50px] md:mb-14 mx-auto  lg:ml-[100px]' /> </Link>
        <Outlet />
        </div>
    )
}

export default NavBar;