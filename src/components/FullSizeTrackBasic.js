import React, { useState } from "react";

import { removeTV } from "../app/utilities/removeTaylorsVersion";


const FullSizeTrackBasic = ({ track, albumBackgroundColor, albumColor }) => {
    if (track.name) {
        return (
            <>
                <div className="full-track-container">
                    <div className={`full-track-bar ${albumBackgroundColor}`} style={{ width: 100 }} >
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

export default FullSizeTrackBasic;