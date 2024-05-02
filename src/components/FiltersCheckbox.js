import React, { useState } from "react";
import '../styles/CSS/main.css';

function CheckBox({ filter, selectedFilters, setSelectedFilters }) {

    // to select a filter, you must deselect the checkbox. 

    const isChecked = !selectedFilters.includes(filter);
    const [checked, setChecked] = useState(true);
    console.log('selectedFilters', selectedFilters);

    const handleAddFilter = (filter) => {
        setSelectedFilters((prevSelected) => (
            [...prevSelected, filter]
        ));
    };

    const handleRemoveFilter = (filter) => {
        setSelectedFilters((prevSelected) => (
            prevSelected.filter(item => item !== filter)
        ));
    };

    const handleClick = (filter) => {
        setChecked((prevChecked) => !prevChecked);

        if (!checked) {
            handleRemoveFilter(filter);

        } else {
            handleAddFilter(filter);

        }
    };
    let filterId = filter;

    return (
        < div className="container">
            <input
                className="filter-button"
                type="checkbox"
                id={filterId}
                checked={isChecked}
                onChange={() => handleClick(filter)}
                // onChange={handleClick}

            />

            <label htmlFor={filterId}> {filter} </label>
        </div>

    );

    

}
export default CheckBox;
