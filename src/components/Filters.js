import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters } from "../store/slices/filter_slice";
import { filterOptions, filterTracks } from "../app/utilities/filterTracks";

function CheckBox({ filter, selectedFilters, setSelectedFilters }) {

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
                checked={checked}
                onChange={() => handleClick(filter)}
            />
              <span class="checkmark"></span>

            <label htmlFor={filterId}> {filter} </label>
        </div>

    );

}


const Filters = ({ inputTracks, setQuizFiltered }) => {

    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

   // REDUX __________________________________
   const dispatch = useDispatch();
   const { tracks, filteredTracks } = useSelector((state) => state.filter);
   // ____________________________________________________________________



     const handleClick = () => {
        setShowFilters(prev => !prev);
    };


    useEffect(() => {
        setQuizFiltered(filterTracks(inputTracks, selectedFilters));
        }, [ selectedFilters ] )

 
    console.log('REDUX FILTER FILTER TRACKS', filteredTracks);
    console.log('REDUX FILTER TRACKS', tracks);

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
