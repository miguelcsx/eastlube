// app/components/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";

const Navbar = () => {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const handleMenuButtonClick = () => {
        setIsSidenavOpen(!isSidenavOpen);
    }

    const handleCloseSidenav = () => {
        setIsSidenavOpen(false);
    }

    return (
        <nav className="sticky bg-black text-white top-0 left-0 right-0 z-50 flex justify-between items-center px-12 p-4 text-sm font-bold">

            {/* LOGO */}
            <div>
                <Link to="/" className="sm:text-sm"><img className="h-8 md:h-3" src="" alt="Eastern Lubrication Systems" /></Link>
            </div>

            {/* MENU */}
            <div className="hidden lg:inline">
                <ul className="flex justify-center hover:cursor-pointer">
                    <li className="py-1 px-3 hover:rounded hover:bg-white/10">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="py-1 px-3 hover:rounded hover:bg-white/10">
                        <Link to="/work">Portfolio</Link>
                    </li>
                    <li className="py-1 px-3 hover:rounded hover:bg-white/10">
                        <Link to="/careers">Careers</Link>
                    </li>
                    <li className="py-1 px-3 hover:rounded hover:bg-white/10">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="py-1 px-3 hover:rounded hover:bg-white/10">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="lg:hidden">
                <button
                    className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-white/10 shadow-sm hover:bg-white/20"
                    onClick={handleMenuButtonClick}>
                    Menu
                </button>
            </div>
            <Sidenav isOpen={isSidenavOpen} onClose={handleCloseSidenav} />
        </nav>
    )
};

export default Navbar;