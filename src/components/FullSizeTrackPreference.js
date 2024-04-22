import { removeTV } from "../app/utilities/removeTaylorsVersion";
import React, { useState } from "react";


const FullSizeTrackPreference = ({ track, albumBackgroundColor, albumColor }) => {

    // each track has a base amount of points : 1
    const points = track.points;
    console.log('points', points);

    const mobileDurationInPx = ((points * 0.7) ) + 'px';
    const tabletDurationInPx = ((points * 1.2) ) + 'px';
    const desktopDurationInPx = ((points * 2.7) ) + 'px';
    const monitorDurationInPx = ((points * 4) ) + 'px';



    if (track.name) {
        return (
            <>
                {/* mobile */}
                <div className="full-track-container full-track-mobile">
                    {/* <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p> */}
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: mobileDurationInPx, minWidth: mobileDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* tablet */}
                <div className="full-track-container full-track-tablet">
                    {/* <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p> */}
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: tabletDurationInPx, minWidth: tabletDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* desktop */}
                <div className="full-track-container full-track-desktop">
                    {/* <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p> */}
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: desktopDurationInPx, minWidth: desktopDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* monitor */}
                <div className="full-track-container full-track-monitor">
                    {/* <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p> */}
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: monitorDurationInPx, minWidth: monitorDurationInPx }} >
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

export default FullSizeTrackPreference;
