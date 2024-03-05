import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import VerticalTrack from "./VerticalTrack";
const VerticalChronology = ({ tracks, orderOption }) => {

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
                    <div className="vertical-chronology-container" style={{ marginBottom: 40 }}>
                        {filteredTracks.map((track, index) => (
                            <div key={index}>
                                <div className="vertical-album-container" >
                                    <div className="vertical-album-tracks">
                                        <VerticalTrack
                                            type='sortedOrder'
                                            track={track}
                                            key={index}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}

            {durationOrder ? (
                <>
                    <div className="vertical-chronology-container" style={{ marginBottom: 40 }}>
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <div className="vertical-album-container" >
                                    <div className="vertical-album-tracks">
                                        <VerticalTrack
                                            type='sortedOrder'
                                            track={track}
                                            key={index}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}

        </>
    );
};


export default VerticalChronology;










