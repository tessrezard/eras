import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { filterOptions, filterTracks } from "../app/utilities/filterTracks";
import CheckBox from "./FiltersCheckbox";
import NewCheckBox from "./NewFiltersCheckbox";
import { albumsList } from "../app/utilities/globalVariables";
import { filterByAlbum } from "../app/utilities/filterByAlbum";

const FilterAlbums = ({ inputTracks, setFiltered, defaultAlbums }) => {


    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    console.log('filterByAlbum', filterByAlbum(inputTracks, selectedFilters))


    const handleShowClick = () => {
        setShowOptions(prev => !prev);
    };


    useEffect(() => {
        if (defaultAlbums) {
            setSelectedFilters(defaultAlbums);
        }
    }, []);

    useEffect(() => {
        setFiltered(filterByAlbum(inputTracks, selectedFilters));
    }, [selectedFilters])


    return (
        <>
            <div className="options-pill-whole-container">
                <div
                    className={`options-pill-header ${showOptions ? 'active' : ''}`}
                    onClick={handleShowClick}
                >
                    <p className="options-pill-arrow" >➸</p>
                    <p>Albums</p>
                </div>
                {showOptions ? (
                    <>
                    <div className="options-pill-content-container">

                        {albumsList.map(filter => {
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





export default FilterAlbums;
