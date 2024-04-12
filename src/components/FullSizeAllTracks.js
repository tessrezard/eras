import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import { sortByPreference } from "../app/utilities/sortByPreference";
import FullSizeTrack from "./FullSizeTrack";


const FullSizeAllTracks = ({ tracks, sortType, orderOption }) => {

    //_____________________________________________________________________________________________________
    // ------------------------ ORDER OPTIONS: era/sorted ------------------------
    //DETERMINE WHETHER TO SHOW IN ERA ORDER OR SORTED ORDER (orderOption)

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
        default:
            eraOrder = true;
            sortedOrder = false;
    }


    //_____________________________________________________________________________________________________
    // --------------- SORT TYPE: duration/preference/explicit ---------------
    //DETERMINE THE TYPE OF SORT, WHAT DATA TO ILLUSTRATE? DURATION, EXPLICIT, PREFERENCE... (sortType)
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
        case 'preference':
            preferenceSortType = true;
            break;
    }

    const sortedDuration = sortTracksByDuration(tracks);
    const sortedExplicit = sortbyExplicit(tracks);
    const sortedPreference = sortByPreference(tracks);




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

                    {sortedOrder && preferenceSortType ? (
                    <>
                        {sortedPreference.map((track, index) => (
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










