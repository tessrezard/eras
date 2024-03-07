import React, { useState } from "react";
import '../styles/CSS/main.css';
import CondensedTrack from "./CondensedTrack";
import CondensedTrackVertical from "./CondensedTrackVertical";
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";


const Condensed = ({ tracks, sortType, orderOption }) => {

    const [trackName, setTrackName] = useState('Hover over track to see name');
    const [trackEraColor, setTrackEraColor] = useState();
    console.log(trackName);

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

    const sortedDuration = sortTracksByDuration(tracks);
    const sortedExplicit = sortbyExplicit(tracks);

    return (
        <>
            <p className={`condensed-title ${trackEraColor}`}>{trackName}</p>

            {eraOrder ? (
                <>
                    {/* FOR MOBILE */}
                    <div className={`condensed-vertical-container`}>
                        <div>
                            {tracks.map((track, index) => (
                                <div key={index}>
                                    <CondensedTrackVertical
                                        track={track}
                                        sortType={sortType}
                                        setTrackName={setTrackName}
                                        setTrackEraColor={setTrackEraColor}
                                        trackName={trackName}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FOR WIDER SCREENS */}
                    <div className={`condensed-container`}>
                        {tracks.map((track, index) => (
                            <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                    setTrackName={setTrackName}
                                    setTrackEraColor={setTrackEraColor}
                                    trackName={trackName}
                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}


            {sortedOrder && durationSortType ? (
                <>
                    {/* FOR MOBILE */}
                    <div className={`condensed-vertical-container`}>
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <CondensedTrackVertical
                                    track={track}
                                    sortType={sortType}
                                    setTrackName={setTrackName}
                                    setTrackEraColor={setTrackEraColor}
                                    trackName={trackName}
                                />
                            </div>
                        ))}
                    </div>

                    {/* FOR WIDER SCREENS */}
                    <div className={`condensed-container`}>
                        {sortedDuration.map((track, index) => (
                            <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                    setTrackName={setTrackName}
                                    setTrackEraColor={setTrackEraColor}
                                    trackName={trackName}
                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}


            {sortedOrder && explicitSortType ? (
                <>
                    {/* FOR MOBILE */}
                    <div className={`condensed-vertical-container`}>
                        {sortedExplicit.map((track, index) => (
                            <div key={index}>
                                <CondensedTrackVertical
                                    track={track}
                                    sortType={sortType}
                                    setTrackName={setTrackName}
                                    setTrackEraColor={setTrackEraColor}
                                    trackName={trackName}
                                />
                            </div>
                        ))}
                    </div>

                    {/* FOR WIDER SCREENS */}
                    <div className={`condensed-container`}>
                        {sortedExplicit.map((track, index) => (
                            <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    sortType={sortType}
                                    setTrackName={setTrackName}
                                    setTrackEraColor={setTrackEraColor}
                                    trackName={trackName}
                                />
                            </div>
                        ))}
                    </div>
                </>) : (<></>)}

        </>
    );
};


export default Condensed;
