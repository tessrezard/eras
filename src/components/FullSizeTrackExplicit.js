import { removeTV } from "../app/utilities/removeTaylorsVersion";
import React, { useState } from "react";


const FullSizeTrackExplicit = ({ track, albumBackgroundColor, albumColor }) => {

    // FOR EXPLICIT ------------------------
    let explicitInPx = 5;
    if (track.explicit) {
        explicitInPx = 230;
    } else {
        explicitInPx = 40;
    }// ------------------------



    const mobileExplicitInPx = explicitInPx ;
    const tabletExplicitInPx = explicitInPx * 2;
    console.log(tabletExplicitInPx)
    const desktopExplicitInPx = explicitInPx * 3;
    const monitorExplicitInPx = explicitInPx * 5;

    const ExplicitIcon = ({ track }) => {
        if (track.explicit == true) {
            return (
                <div className={`explicit-icon ${albumBackgroundColor} `}>
                    E
                </div>
            )
        }
        else {
            return (<></>)
        }
    }

    if (track.name) {
        return (
            <>
                {/* mobile */}
                <div className="full-track-container full-track-mobile">
                    <div className="explicit-icon-container">
                        <ExplicitIcon track={track} />
                    </div>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: mobileExplicitInPx, minWidth: mobileExplicitInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* tablet */}
                <div className="full-track-container full-track-tablet">
                    <div className="explicit-icon-container">
                        <ExplicitIcon track={track} />
                    </div>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: tabletExplicitInPx, minWidth: tabletExplicitInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* desktop */}
                <div className="full-track-container full-track-desktop">
                    <div className="explicit-icon-container">
                        <ExplicitIcon track={track} />
                    </div>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: desktopExplicitInPx, minWidth: desktopExplicitInPx }} >
                        <div className="full-track-title-container " >
                            <p className={`full-track-title ${albumColor}`}>{removeTV(track.name)}</p>
                        </div>
                    </div>
                </div>

                {/* monitor */}
                <div className="full-track-container full-track-monitor">
                    <div className="explicit-icon-container">
                        <ExplicitIcon track={track} />
                    </div>
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: monitorExplicitInPx, minWidth: monitorExplicitInPx }} >
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

export default FullSizeTrackExplicit;
