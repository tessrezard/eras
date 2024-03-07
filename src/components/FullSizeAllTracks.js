import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import FullSizeTrack from "./FullSizeTrack";


const FullSizeAllTracks = ({ tracks, orderOption, sortType }) => {


    // console.log(sortType, 'sortType');
    let eraOrder = true;
    let sortedOrder = false;
    switch (orderOption) {
        case 'eraOrderOption':
            eraOrder = true;
            sortedOrder = false;
            break;
        case 'sortedOrderOption':
            eraOrder = false;
            sortedOrder = true;
            break;
    }


    let durationSortType = false;
    let explicitSortType = false;
    switch (sortType) {
        case 'duration':
            durationSortType = true;
            break;
        case 'explicit':
            explicitSortType = true;
            break;
    }
    const filteredTracks = tracks;


    const sortedDuration = sortTracksByDuration(filteredTracks);
    const sortedExplicit = sortbyExplicit(tracks);

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
                                    sortType={sortType}

                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}

            {sortedOrder && durationSortType ? (
                <>
                    <div className="full-chronology-container" >
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    type='sortedOrder'
                                    track={track}
                                    sortType={sortType}

                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}

            {sortedOrder && explicitSortType ? (
                <>
                    <div className="full-chronology-container" >
                        {sortedExplicit.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    type='sortedOrder'
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


export default FullSizeAllTracks;










