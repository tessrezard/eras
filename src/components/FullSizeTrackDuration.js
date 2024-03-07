import { removeTV } from "../app/utilities/removeTaylorsVersion";
import React, { useState } from "react";


const FullSizeTrackDuration = ({ track, albumBackgroundColor, albumColor }) => {

    const duration_ms = track.duration_ms;
    const mobileDurationInPx = ((duration_ms / 1000) / 2) + 'px';
    const tabletDurationInPx = ((duration_ms / 1000)) + 'px';
    const desktopDurationInPx = ((duration_ms / 1000) * 1.7) + 'px';
    const monitorDurationInPx = ((duration_ms / 1000) * 2) + 'px';


    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };

    if (track.name) {
        return (
            <>
                {/* mobile */}
                <div className="full-track-container full-track-mobile">
                    <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: mobileDurationInPx, minWidth: mobileDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* tablet */}
                <div className="full-track-container full-track-tablet">
                    <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: tabletDurationInPx, minWidth: tabletDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* desktop */}
                <div className="full-track-container full-track-desktop">
                    <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: desktopDurationInPx, minWidth: desktopDurationInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* monitor */}
                <div className="full-track-container full-track-monitor">
                    <p className={`full-track-duration-display ${albumColor}`}>{millisecondsToMinutes(track.duration_ms)}</p>
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

export default FullSizeTrackDuration;
