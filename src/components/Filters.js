import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { filterOptions, filterTracks } from "../app/utilities/filterTracks";
import CheckBox from "./FiltersCheckbox";
import NewCheckBox from "./NewFiltersCheckbox";

const Filters = ({ inputTracks, setFiltered, defaultFilters }) => {

//   const defaultFilters = ['remix', 'live', 'acoustic', 'single'];

    const [selectedFilters, setSelectedFilters] = useState([]);
    // const [selectedFilters, setSelectedFilters] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    console.log('filterOptions', filterOptions)


    const handleShowClick = () => {
        setShowOptions(prev => !prev);
    };


    useEffect(() => {
        if (defaultFilters) {
            setSelectedFilters(defaultFilters);
        }
    }, []);

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
                    <p>Song Type</p>
                </div>
                {showOptions ? (
                    <>
                    <div className="options-pill-content-container">

                        {filterOptions.map(filter => {
                            return (
                                <div key={filter}>
                                    <NewCheckBox 
                                    filter={filter} 
                                    selectedFilters={selectedFilters} 
                                    setSelectedFilters={setSelectedFilters}
                                    />
                                </div>
                            )
                        })}
                                            </div>

                    </>
                ) : (<></>)}
            </div>


        </>

    );
};





export default Filters;
