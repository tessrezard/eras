import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import NewCheckBox from "./NewFiltersCheckbox";
// import { albumsList } from "../app/utilities/globalVariables";
import { filterByAlbum } from "../app/utilities/filterByAlbum";

const FilterAlbums = ({ inputTracks, setAlbumFilteredTracks, defaultAlbums }) => {


    const albumsList = [
        'theTorturedPoetsDepartment',
        'midnights',
        'evermore',
        'folklore',
        'lover',
        'reputation',
        'nineteenEightyNine',
        'red',
        'speakNow',
        'fearless',
        'taylorSwift',
        'other'
    ];


    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showOptions, setShowOptions] = useState(false);


    const handleShowClick = () => {
        setShowOptions(prev => !prev);
    };


    const handleDeselectAll = () => {
        setSelectedFilters([...albumsList]);
    };

    const handleSelectAll = () => {
        setSelectedFilters([]);
    };

    
    useEffect(() => {
        if (defaultAlbums) {
            setSelectedFilters(defaultAlbums);
        }
    }, []);



    useEffect(() => {
        setAlbumFilteredTracks(filterByAlbum(inputTracks, selectedFilters));
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
                    <div className="options-pill-content-container-album">
                    <div className="options-pill-select-buttons-container">
                        <button  className="options-pill-select-button" onClick={handleSelectAll}>Select All</button>
                        <button className="options-pill-select-button" onClick={handleDeselectAll}>Deselect All</button>
                        {/* <button className={`options-pill-select-button ${selectedFilters.length === albumsList.length ? 'active' : ''}`} onClick={handleSelectAll}>Select All</button> */}
                        {/* <button className={`options-pill-select-button ${selectedFilters.length === 0 ? 'active' : ''}`} onClick={handleDeselectAll}>Deselect All</button>                    </div>                         */}

                    </div>                        
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
