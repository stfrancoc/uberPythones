import React from "react";

const NavBar = () => {
    return(
        <>
        <nav className="flex justify-around bg-slate-900 text-slate-50 w-screen h-10 items-center">
            <p>Uber</p>
            <ul className="flex justify-around w-2/3 sm:w-1/2">
                <li>Home</li>
                <li>About</li>
                <li>Requirements</li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;