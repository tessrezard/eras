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
        <div className="full-chronology-container" >

            <div className="full-size-tracks-container">


                {eraOrder ? (
                    <>
                        {filteredTracks.map((track, index) => (
                            <div key={index}>
                                <FullSizeTrack
                                    type='sortedOrder'
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
                                    type='sortedOrder'
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
                                    type='sortedOrder'
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










