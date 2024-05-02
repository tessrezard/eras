import React, { useState } from 'react';
import '../styles/CSS/main.css';

function NewCheckBox({ filter, selectedFilters, setSelectedFilters }) {
    const isChecked = !selectedFilters.includes(filter); // Invert the logic

    const handleClick = () => {
        if (isChecked) {
            setSelectedFilters(prevSelected => [...prevSelected, filter]); // Add filter when it's not selected
        } else {
            setSelectedFilters(prevSelected => prevSelected.filter(item => item !== filter)); // Remove filter when it's selected
        }
    };

    let filterId = filter;

    return (
        <div className="container">
            <input
                className="filter-button"
                type="checkbox"
                id={filterId}
                checked={isChecked}
                onChange={handleClick}
            />
            <label htmlFor={filterId}>{filter}</label>
        </div>
    );
}

export default NewCheckBox;