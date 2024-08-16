import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Layouts() {

    const [openNav, setOpenNav] = useState(false);

    return (
        <div className="flex">
            <nav className="z-20">
                <Navbar setOpenNav={setOpenNav} openNav={openNav} />
                <Sidebar openNav={openNav} />
            </nav>
            <div onClick={() => setOpenNav(false)} className="w-full px-4 pt-16">
                <Outlet />
            </div>
        </div>
    )
}