import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { filterOptions, filterTracks } from "../app/utilities/filterTracks";
import CheckBox from "./FiltersCheckbox";

const Filters = ({ inputTracks, setFiltered }) => {

    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

  
     const handleClick = () => {
        setShowFilters(prev => !prev);
    };


    useEffect(() => {
        setFiltered(filterTracks(inputTracks, selectedFilters));
        }, [ selectedFilters ] )


    return (
        <>
            <div className="filters-whole-container">

                <div onClick={handleClick}>
                    <p>Filters</p>
                </div>

                <div className="filters-container">
                    {showFilters ? (
                        <>
                            {filterOptions.map(filter => {
                                return (
                                    <div key={filter}>
                                        <CheckBox filter={filter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                                    </div>
                                )

                            })}

                            <div>

                            </div>

                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>


            </div>
        </>
    );
};





export default Filters;
