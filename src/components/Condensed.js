import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import { sortByPreference } from "../app/utilities/sortByPreference";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import CondensedTrackDuration from "./CondensedTrackDuration";
import CondensedTrackExplicit from "./CondensedTrackExplicit";
import CondensedTrackPreference from "./CondensedTrackPreference";

const Condensed = ({ tracks, sortType, orderOption, directionUp }) => {

    const [trackName, setTrackName] = useState('Hover over track to see name');
    const [trackEraColor, setTrackEraColor] = useState();

    let direction;
    if (directionUp == true) {
        direction = 'condensed-direction-up';
    }


    const reverseGraphTracks = reverseEraOrder(tracks);


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
        <>
            <p className={`condensed-title ${trackEraColor}`}>{trackName}</p>
            {/* <div className="condensed-resize-wrapper"> */}

            {/* -----------------------------------------------------DISPLAY IN ERA ORDER----------------------------------------------------- */}
            {eraOrder ? (
                <>
                    <div className="condensed-container">
                        <div className={`condensed-tracks`}>

                            {/* ------------------------MAP tracks in era order------------------------ */}

                            <div className={`condensed-top-to-bottom-tracks  ${direction}`}>
                                
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

                                        {/* -------preference sort type------- */}
                                        {preferenceSortType ? (
                                            <CondensedTrackPreference
                                                track={track}
                                                sortType={sortType}
                                                setTrackName={setTrackName}
                                                setTrackEraColor={setTrackEraColor}
                                                trackName={trackName} />) : (<></>)}

                                    </div>
                                ))}

                            </div>

                            <div className={`condensed-left-to-right-tracks ${direction}`}>
                                
                                {reverseGraphTracks.map((track, index) => (
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

                                        {/* -------preference sort type------- */}
                                        {preferenceSortType ? (
                                            <CondensedTrackPreference
                                                track={track}
                                                sortType={sortType}
                                                setTrackName={setTrackName}
                                                setTrackEraColor={setTrackEraColor}
                                                trackName={trackName} />) : (<></>)}

                                    </div>
                                ))}
                                
                            </div>



                        </div>

                    </div>
                </>) : (<></>)}


            {/* -----------------------------------------------------DISPLAY IN SORTED ORDER----------------------------------------------------- */}
            {sortedOrder ? (
                <>
                    <div className="condensed-container">
                        <div className={`condensed-tracks ${direction}`}>
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


                            {/* -------preference sort type------- */}
                            {preferenceSortType ? (
                                <>
                                    {/* ------------------------MAP tracks in explicit sorted order------------------------ */}
                                    {sortedPreference.map((track, index) => (
                                        <div key={index}>
                                            <CondensedTrackPreference
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

            {/* </div> */}

        </>
    );
};


export default Condensed;
