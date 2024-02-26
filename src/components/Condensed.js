import React, { useState } from "react";
import '../styles/CSS/main.css';
import CondensedTrack from "./CondensedTrack";

const Condensed = ({tracks, sortType}) => {
// console.log(sortType);

    return (
        <>
            <div className="condensed-container">
            {tracks.map((track, index) => (
                    <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                />
                    </div>
                ))}
            </div>


        </>
    );
};


export default Condensed;
