import React, { useState }  from "react";
import {Link, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/layout/header.css';

function Header() {

    const [activeBurger, setActiveBurger] = useState(false);

    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/home' />
    }

      
    return (
        <>
            <header >
                <div className='header-container'>
                    <p className='header-title'> Eras✨ </p>
                </div>
            </header>
        </>
    )
}

export default Header;