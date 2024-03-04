import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';

const SortOptions = ({ sorting, setSorting }) => {
    const [showOptions, setShowOptions] = useState(false);


    const handleShowClick = () => {
        setShowOptions(prev => !prev);
    };

    const handleSortOptionChange = e => {
        setSorting(e.target.value)
    }


    return (
        <>

            <div className="options-pill-whole-container">
                <h1 className="sort-options-header">Sorted by {sorting}</h1>

                <div
                    className={`options-pill-header ${showOptions ? 'active' : ''}`}
                    onClick={handleShowClick}
                >
                    <p className="options-pill-arrow" >➸</p>
                    <p>Sort Type</p>
                </div>
                {showOptions ? (
                    <>
                        <form className="sort-options-form">

                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="Duration"
                                    id="duration"
                                    checked={sorting === "Duration"}
                                    onChange={handleSortOptionChange}
                                />
                                <label htmlFor="duration">Duration</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="Explicit"
                                    id="Explicit"
                                    checked={sorting === "Explicit"}
                                    onChange={handleSortOptionChange}
                                />
                                <label htmlFor="Explicit">Explicit</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="Track Number"
                                    id="Track Number"
                                    checked={sorting === "Track Number"}
                                    onChange={handleSortOptionChange}
                                />
                                <label htmlFor="Track Number">Track Number</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="BPM"
                                    id="BPM"
                                    checked={sorting === "BPM"}
                                    onChange={handleSortOptionChange}
                                />
                                <label htmlFor="BPM">Beats Per Minute</label>
                            </div>

                        </form>
                    </>
                ) : (<></>)}
            </div>

        </>
    );
};





export default SortOptions;
