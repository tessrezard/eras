import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { filterOptions, filterTracks } from "../app/utilities/filterTracks";
import CheckBox from "./FiltersCheckbox";

const Filters = ({ inputTracks, setFiltered }) => {

    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    const handleShowClick = () => {
        setShowOptions(prev => !prev);
    };

    useEffect(() => {
        setFiltered(filterTracks(inputTracks, selectedFilters));
    }, [selectedFilters])


    return (
        <>
            <div className="options-pill-whole-container">
                <div
                    className={`options-pill-header ${showOptions ? 'active' : ''}`}
                    onClick={handleShowClick}
                >
                    <p className="options-pill-arrow" >➸</p>
                    <p>Filters</p>
                </div>
                {showOptions ? (
                    <>
                        {filterOptions.map(filter => {
                            return (
                                <div key={filter}>
                                    <CheckBox filter={filter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                                </div>
                            )

                        })}
                    </>
                ) : (<></>)}
            </div>


        </>

    );
};





export default Filters;
