import React from "react";
import '../styles/CSS/layout/header.css';

// BergMenu is the menu that appears when Berger is clicked on mobile screens
// Styled components for the button and animations

function Burger({ active, setActive }) {


    const handleClick = () => {
        setActive(prev => !prev);
    };


    return (
        <>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: "center" }}>
            <div className={`burgerContainer ${active ? 'active' : ''}`} onClick={handleClick}>
                    <div className='burgerBars'>
                        <div className='burgerBar' />
                        <div className='burgerBar' />
                        <div className='burgerBar' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Burger;


// git remote add origin https://github.com/tessrezard/eras.git
// git branch -M main
// git push -u origin main