import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import FullSizeTrack from "./DispFullSizeTrack"; 


const DisplayFullSizeTracks = ({ tracks, orderOption }) => {

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

    const filteredTracks = tracks;



    const sortedDuration = sortTracksByDuration(filteredTracks);
    // const sortedDuration = sortTracksByDuration(singleFiltered);

    return (
        <>





            {eraOrder ? (
                <>
                    <div className="full-chronology-container" >
                {filteredTracks.map((track, index) => (
                    <div key={index}>
                            <FullSizeTrack
                                type='sortedOrder'
                                track={track}
                                key={index}
                            />
                    </div>
                ))}
            </div>
                </>) : (<></>)}

            {durationOrder ? (
                <>
                    <div className="full-chronology-container" >
                        {sortedDuration.map((track, index) => (
                             <div key={index}>
                                 <FullSizeTrack
                                     type='sortedOrder'
                                     track={track}
                                     key={index}
                                 />
                         </div>
                        ))}
                    </div>
                </>) : (<></>)}

        </>
    );
};


export default DisplayFullSizeTracks;










