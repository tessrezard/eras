import React, { useState } from "react";
import '../styles/CSS/main.css';
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import { sortbyExplicit } from "../app/utilities/sortByExplicit";
import { sortByPreference } from "../app/utilities/sortByPreference";

import CondensedTrackPreference from "./CondensedTrackPreference";
import ThumbnailTrack from "./Saved-ThumbnailTrack";

const Thumbnail = ({ tracks, sortType, orderOption, directionUp }) => {

    const [trackName, setTrackName] = useState('Hover over track to see name');
    const [trackEraColor, setTrackEraColor] = useState();
    
    let direction;
        if (directionUp == true){
            direction = 'thumbnail-direction-up';
        }
    

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
    
    const sortedPreference = sortByPreference(tracks);

    return (
        <>
            {/* <p className={`condensed-title ${trackEraColor}`}>{trackName}</p> */}

            {/* -----------------------------------------------------DISPLAY IN ERA ORDER----------------------------------------------------- */}
            {eraOrder ? (
                <>
                    <div className="saved-thumbnail-container">
                        <div className={`thumbnail-tracks `}>

                            {/* ------------------------MAP tracks in era order------------------------ */}
                            {tracks.map((track, index) => (
                                <div key={index}>
                                        <ThumbnailTrack
                                            track={track}
                                            sortType={sortType}
                                            setTrackName={setTrackName}
                                            setTrackEraColor={setTrackEraColor}
                                            trackName={trackName} />
                                </div>
                            ))}

                        </div>

                    </div>
                </>) : (<></>)}


            {/* -----------------------------------------------------DISPLAY IN SORTED ORDER----------------------------------------------------- */}
            {sortedOrder ? (
                <>
                    <div className="saved-thumbnail-container">
                        <div className={`thumbnail-tracks`}>

                                    {/* ------------------------MAP tracks in explicit sorted order------------------------ */}
                                    {sortedPreference.map((track, index) => (
                                        <div key={index}>
                                            <ThumbnailTrack
                                                track={track}
                                                sortType={sortType}
                                                setTrackName={setTrackName}
                                                setTrackEraColor={setTrackEraColor}
                                                trackName={trackName} />
                                        </div>
                                    ))
                                    }
                        </div>
                    </div>
                </>) : (<></>)}


        </>
    );
};


export default Thumbnail;



