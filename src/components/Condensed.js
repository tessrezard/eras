import React, { useState } from "react";
import '../styles/CSS/main.css';
import CondensedTrack from "./CondensedTrack";
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";



const Condensed = ({ tracks, sortType, orderOption, directionUp }) => {
    // console.log(sortType);
    let eraOrder = true;
    let durationOrder = false;
    switch (orderOption) {
        case 'eraOrderOption':
            eraOrder = true;
            durationOrder = false;
            break;

        case 'durationOrderOption':
            eraOrder = false;
            durationOrder = true;
            break;
    }
    let styledUpOrDown ;

    const upOrDown = () => {
        if (directionUp) {
            styledUpOrDown = 'condensed-container-styled-up'
        } else {
            styledUpOrDown = 'condensed-container-styled-down'
        }
        return styledUpOrDown
    }
   
    const sortedDuration = sortTracksByDuration(tracks);


    return (
        <>
            {eraOrder ? (
                <>
                    <div className={`condensed-container ${styledUpOrDown}`}>
                        {tracks.map((track, index) => (
                            <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}
            {durationOrder ? (
                <>
                    <div className={`condensed-container ${styledUpOrDown}`}>
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}
        </>
    );
};


export default Condensed;
