import React from 'react';
import logo from "../assets/movix-logo.png"
const LogoTitle = () => {
    return (
        <div >
            <div className="h-22 w-14 flex gap-3">
                <img className="w-full h-14" src={logo} alt="logo" />
                <h3 className="">
                    <span className="tracking-widest text-3xl">Eassy</span> Film
                </h3>
            </div>
            <div className="pt-1 pl-2">Chill with us</div>
        </div>
    );
};

export default LogoTitle;
