import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import CondensedTrackDuration from "./CondensedTrackDuration";
import CondensedTrackExplicit from "./CondensedTrackExplicit";

const Condensed = ({ tracks, sortType, orderOption }) => {

    const [trackName, setTrackName] = useState('Hover over track to see name');
    const [trackEraColor, setTrackEraColor] = useState();
    console.log(trackName);

    //_____________________________________________________________________________________________________
    //DETERMINE THE TYPE OF SORT, WHAT DATA TO ILLUSTRATE? DURATION, EXPLICIT, PREFERENCE... (sortType)
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

    //_____________________________________________________________________________________________________
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



    return (
        <>
            <p className={`condensed-title ${trackEraColor}`}>{trackName}</p>

            {/* -----------------------------------------------------DISPLAY IN ERA ORDER----------------------------------------------------- */}
            {eraOrder ? (
                <>
                    <div className="condensed-container">
                        <div className="condensed-tracks">

                            {/* ------------------------MAP tracks in era order------------------------ */}
                            {tracks.map((track, index) => (
                                <div key={index}>
                                    {/* -------duration sort type------- */}
                                    {durationSortType ? (
                                        <CondensedTrackDuration
                                            track={track}
                                            sortType={sortType}
                                            setTrackName={setTrackName}
                                            setTrackEraColor={setTrackEraColor}
                                            trackName={trackName} />) : (<></>)}

                                    {/* -------explicit sort type------- */}
                                    {explicitSortType ? (
                                        <CondensedTrackExplicit
                                            track={track}
                                            sortType={sortType}
                                            setTrackName={setTrackName}
                                            setTrackEraColor={setTrackEraColor}
                                            trackName={trackName} />) : (<></>)}

                                </div>
                            ))}
                        </div>

                    </div>
                </>) : (<></>)}


            {/* -----------------------------------------------------DISPLAY IN SORTED ORDER----------------------------------------------------- */}
            {sortedOrder ? (
                <>
                    <div className="condensed-container">
                        <div className="condensed-tracks">
                            {/* -------duration sort type------- */}
                            {durationSortType ? (
                                <>
                                    {/* ------------------------MAP tracks in duration sorted order------------------------ */}
                                    {sortedDuration.map((track, index) => (
                                        <div key={index}>
                                            <CondensedTrackDuration
                                                track={track}
                                                sortType={sortType}
                                                setTrackName={setTrackName}
                                                setTrackEraColor={setTrackEraColor}
                                                trackName={trackName} />
                                        </div>
                                    ))
                                    }
                                </>) : (<></>)}


                            {/* -------explicit sort type------- */}
                            {explicitSortType ? (
                                <>
                                    {/* ------------------------MAP tracks in explicit sorted order------------------------ */}
                                    {sortedExplicit.map((track, index) => (
                                        <div key={index}>
                                            <CondensedTrackExplicit
                                                track={track}
                                                sortType={sortType}
                                                setTrackName={setTrackName}
                                                setTrackEraColor={setTrackEraColor}
                                                trackName={trackName} />
                                        </div>
                                    ))
                                    }
                                </>) : (<></>)}
                        </div>
                    </div>
                </>) : (<></>)}



        </>
    );
};


export default Condensed;
