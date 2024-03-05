import React from "react";
import '../styles/CSS/main.css';
import { getDefaultNormalizer } from "@testing-library/react";
import { removeTV } from "../app/utilities/removeTaylorsVersion";

const FullSizeTrack = ({ track, type }) => {

    // try {
    //     console.log(track)
    // } catch (error) {
    //     console.log(error)
    // }
    const albumBackgroundColor = 'background-color-' + track.era;
    const albumColor = 'color-' + track.era;
    const duration_ms = track.duration_ms;
    const mobileDurationInPx = ((duration_ms / 1000) / 2) + 'px';
    const tabletDurationInPx = ((duration_ms / 1000)) + 'px';
    const desktopDurationInPx = ((duration_ms / 1000) * 1.7) + 'px';
    const monitorDurationInPx = ((duration_ms / 1000) * 2) + 'px';

    const durationInPx = ((duration_ms / 1000) / 2) + 'px';




    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };


    // --------------------------------------------------------------------------
    // options : 


    // To optimize the website's load time, use SASS to dynamically determine the screen width and select an appropriate track width for display. 

    const BasicTracks = ({ track }) => {
        if (track.name) {
            return (
                <>
                    <div className="full-track-container">
                        <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: durationInPx }} >
                            <div className="full-track-title-container " >
                                <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return <></>
        }

        ;
    }



    const SortedTracks = ({ track }) => {
        if (track.name) {
            return (
                <>
                    {/* mobile */}
                    <div className="full-track-container full-track-mobile">
                        <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                        <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: mobileDurationInPx , minWidth: mobileDurationInPx }} >
                            <div className="full-track-title-container " >
                                <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                            </div>
                        </div>
                    </div>

                    {/* tablet */}
                    <div className="full-track-container full-track-tablet">
                        <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                        <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: tabletDurationInPx , minWidth: tabletDurationInPx }} >
                            <div className="full-track-title-container " >
                                <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                            </div>
                        </div>
                    </div>

                    {/* desktop */}
                    <div className="full-track-container full-track-desktop">
                        <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                        <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: desktopDurationInPx , minWidth: desktopDurationInPx }} >
                            <div className="full-track-title-container " >
                                <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                            </div>
                        </div>
                    </div>

                     {/* monitor */}
                     <div className="full-track-container full-track-monitor">
                        <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                        <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: monitorDurationInPx , minWidth: monitorDurationInPx }} >
                            <div className="full-track-title-container " >
                                <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return <></>
        }
    }



    // pick the right option: 

    const Track = ({ track }) => {
        if (type === 'eraOrder') {
            return <BasicTracks track={track} />;
        }

        if (type === 'sortedOrder') {
            return <SortedTracks track={track} />;
        }

        return null; // No image or thumbnail provided
    };


    return (
        <>
            <Track track={track} />

        </>
    );
};


export default FullSizeTrack;
