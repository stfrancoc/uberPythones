import React from "react";
import Banner from '../assets/banner.jpg';

const Inicio = () => {
    return (
        <>
            <div className="w-screen overflow-hidden" style={{ height: '60vh' }}>
                <img className="w-full h-full object-cover object-center" src={Banner} alt="people smiling" />
            </div>
            <h1 className="text-7xl font-normal text-slate-500 relative z-10 -top-24">Que es Uber?</h1>
            <div >
                <h2 className="text-2xl font-semibold">PUES OOME SOCIO</h2>
            </div>
        </>
    );
}

export default Inicio;