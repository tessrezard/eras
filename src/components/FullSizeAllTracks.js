import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import FullSizeTrack from "./FullSizeTrack";


const FullSizeAllTracks = ({ tracks, sortType, orderOption }) => {


    // ------------------------ ORDER OPTIONS: era/sorted ------------------------
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

    // --------------- SORT TYPE: duration/preference/explicit ---------------
    let durationSortType = false;
    let explicitSortType = false;
    let preferenceSortType = false;

    switch (sortType) {
        case 'duration':
            durationSortType = true;
            break;
        case 'explicit':
            explicitSortType = true;
            break;
        case 'sortedOrderOption':
            preferenceSortType = true;
            break;
    }

    const sortedDuration = sortTracksByDuration(tracks);
    const sortedExplicit = sortbyExplicit(tracks);




    return (
        <div className="full-chronology-container" >

            <div className="full-size-tracks-container">


                {eraOrder ? (
                    <>
                        {tracks.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    orderOption='eraOrder'
                                    track={track}
                                    sortType={sortType}

                                />
                            </div>
                        ))}
                    </>) : (<></>)}

                {sortedOrder && durationSortType ? (
                    <>
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    orderOption='sortedOrder'
                                    track={track}
                                    sortType={sortType}

                                />
                            </div>
                        ))}
                    </>) : (<></>)}

                {sortedOrder && explicitSortType ? (
                    <>
                        {sortedExplicit.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    orderOption='sortedOrder'
                                    track={track}
                                    sortType={sortType}

                                />
                            </div>
                        ))}
                    </>) : (<></>)}
            </div>
        </div>
    );
};


export default FullSizeAllTracks;










