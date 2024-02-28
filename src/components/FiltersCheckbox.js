import React, { useState } from "react";
import '../styles/CSS/main.css';

function CheckBox({ filter, selectedFilters, setSelectedFilters }) {


    // the checked & selected logic here is a little messy. 
    // to select a filter, you must deselect the checkbox. 

    const isChecked = !selectedFilters.includes(filter);

    const [checked, setChecked] = useState(true);
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
            console.log('checked!');
            handleRemoveFilter(filter);

        } else {
            console.log('unchecked!');
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
            />
              <span class="checkmark"></span>

            <label htmlFor={filterId}> {filter} </label>
        </div>

    );

}
 export default CheckBox;