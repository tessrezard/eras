import React, { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/layout/header.css';
import LegendIcon from "./LegendIcon";
import Legend from "./Legend";
import NavMenu from "./NavMenu";

function Header() {

    const [activeLegend, setActiveLegend] = useState(false);


    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/home' />
    }

    const handleLegendClick = () => {
        setActiveLegend(prev => !prev);
    }

    return (
        <>
            <header >
                <div className='header-container'>
                    <div
                        onClick={() => handleLegendClick()}
                        className={`header-legend-container ${activeLegend ? 'active' : ''}`}
                    >
                        <LegendIcon />
                    </div>
                    {activeLegend ?
                        (<>
                            <Legend setActiveLegend={setActiveLegend}/>
                        </>) : (
                            <>
                            </>
                        )}
                    <p className='header-title'> Eras✨ </p>

                </div>
                <NavMenu/>

            </header>
        </>
    )
}

export default Header;