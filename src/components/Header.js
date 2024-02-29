import React, { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/layout/header.css';
import LegendIcon from "./LegendIcon";
import Legend from "./Legend";

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
                        <div className="header-legend-text-container">
                            <p className="header-legend-title">Legend</p>
                            <p className="header-legend-arrow"> ➸ </p>
                        </div>
                    </div>
                    {activeLegend ?
                        (<>
                            <Legend />
                        </>) : (
                            <>
                            </>
                        )}
                    <p className='header-title'> Eras✨ </p>

                </div>

            </header>
        </>
    )
}

export default Header;