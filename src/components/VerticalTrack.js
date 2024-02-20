import React from "react";
import '../styles/CSS/main.css';
import { getDefaultNormalizer } from "@testing-library/react";


const VerticalTrack = ({ track, album, index }) => {

    console.log(track);
    // try {
    //     console.log(track)
    // } catch (error) {
    //     console.log(error)
    // }
    const albumBackgroundColor = 'background-color-' + track.era;
    const albumColor = 'color-' + track.era;
    const duration_ms = track.duration_ms;
    const durationInPx = (duration_ms / 1000) + 'px';


    console.log(durationInPx);

    return (
        <>
            <div className="vertical-track-container">

                <div className={`vertical-track-bar ${albumBackgroundColor}`} style={{width: durationInPx}}/>

                <div className="vertical-track-title-container " >
                    <p className={`vertical-track-title ${albumColor}`}>{track.name}</p>
                </div>

            </div>

        </>
    );
};


export default VerticalTrack;
