import React from "react";
import '../styles/CSS/main.css';
import { getDefaultNormalizer } from "@testing-library/react";


const VerticalTrack = ({ track, type }) => {

    // try {
    //     console.log(track)
    // } catch (error) {
    //     console.log(error)
    // }
    const albumBackgroundColor = 'background-color-' + track.era;
    const albumColor = 'color-' + track.era;
    const duration_ms = track.duration_ms;
    const durationInPx = ((duration_ms / 1000)/2) + 'px';




    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };


    // --------------------------------------------------------------------------
    // options : 

    const TrackForInEraOrder = ({ track }) => (
        <>
            <div className="vertical-track-container">
                <div className={`vertical-track-bar ${albumBackgroundColor}`} style={{ width: durationInPx }} />
                <div className="vertical-track-title-container " >
                    <p className={`vertical-track-title ${albumColor}`}>{track.name}</p>
                </div>
            </div>
        </>
    );

    const TrackForInSortedOrder = ({ track }) => (
        <>
            <div className="vertical-track-container">
                <div className={`vertical-track-bar ${albumBackgroundColor}`} style={{ width: durationInPx }} />
                <div className="vertical-track-title-container " >
                    <p className={`vertical-track-title ${albumColor}`}>{track.name} - {millisecondsToMinutes(track.duration_ms)}</p>
                </div>
            </div>
        </>
    );



    // pick the right option: 

    const Track = ({ track }) => {
        if (type === 'eraOrder') {
            return <TrackForInEraOrder track={track} />;
        }

        if (type === 'sortedOrder') {
            return <TrackForInSortedOrder track={track} />;
        }

        return null; // No image or thumbnail provided
    };


    return (
        <>
            <Track track={track} />
        </>
    );
};


export default VerticalTrack;
