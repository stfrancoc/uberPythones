import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <nav className="flex justify-around bg-slate-900 text-slate-50 w-screen h-10 items-center">
            <p><Link to="/">Uber</Link></p>
            <ul className="flex justify-around w-2/3 sm:w-1/2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Requirements</li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;