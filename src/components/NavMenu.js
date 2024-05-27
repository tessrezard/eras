import React, { useState } from "react";
import { Link, useLocation, Navigate, NavLink } from "react-router-dom";
import '../styles/CSS/layout/header.css';
import LegendIcon from "./LegendIcon";
import Legend from "./Legend";

function NavMenu() {

    const [activeLegend, setActiveLegend] = useState(false);


    const handleLegendClick = () => {
        setActiveLegend(prev => !prev);
    }

    return (
        <>
            <nav className="nav-container">
                <NavLink to={'/home'} className='nav-link'
                    style={({ isActive }) => {
                        return isActive ? { borderBottom: 'solid 1.5px rgb(192, 189, 175)' } : {};
                    }}
                > Home </NavLink>

                <NavLink to={'/quiz'} className='nav-link'
                    style={({ isActive }) => {
                        return isActive ? { borderBottom: 'solid 1.5px rgb(192, 189, 175)' } : {};
                    }}
                > Quiz </NavLink>


                <NavLink to={'/saved-all'} className='nav-link'
                    style={({ isActive }) => {
                        return isActive ? { borderBottom: 'solid 1.5px rgb(192, 189, 175)' } : {};
                    }}
                > Saved Rankings </NavLink>


                <NavLink to={'/sorted_by'} className='nav-link'
                    style={({ isActive }) => {
                        return isActive ? { borderBottom: 'solid 1.5px rgb(192, 189, 175)' } : {};
                    }}
                > Data </NavLink>

                <NavLink to={'/notes'} className='nav-link'
                    style={({ isActive }) => {
                        return isActive ? { borderBottom: 'solid 1.5px rgb(192, 189, 175)' } : {};
                    }}
                > Notes </NavLink>

            </nav>

        </>
    )
}

export default NavMenu;