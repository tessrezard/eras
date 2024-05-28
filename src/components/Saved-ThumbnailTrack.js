import React from "react";
import '../styles/CSS/main.css';
import CondensedTrackVertical from "./CondensedTrack-Vertical";
import CondensedTrackHorizontal from "./CondensedTrack-Horizontal";



const ThumbnailTrack = ({ track, setTrackName, setTrackEraColor, totalNumTracks }) => {


    let variant = track.trackVariant
    if (variant) {
        switch (variant) {
            case 'remix':
                variant = 'single';
                break;
            case 'live':
                variant = 'single';
                break;
            case 'live':
                variant = 'single';
                break;
            default:
                variant = track.trackVariant;
        }
    }

    const variantBackGroundColor = 'background-color-' + track.era + '-' + variant;
    const variantColor = 'color-' + track.era + '-' + variant;
    const points = track.points;

    // -------------------------------------------------------------
    let sortedWidth = '1px';
    if (totalNumTracks < 200){
        sortedWidth = '2px';
   }
    if (totalNumTracks < 100){
         sortedWidth = '3px';
    }


    let sortedHeight = '200px';
    if (track) {
        const pointsInPx = (points * 0.6) + 'px';
        sortedHeight = pointsInPx;
    }


    return (
        <>
            <div className="thumbnail-track-container"     >
                <div
                    className={`thumbnail-track-bar ${variantBackGroundColor}`}
                    style={{ height: sortedHeight, width: sortedWidth }} 
                />
            </div>
            {/* 
            <div
                className="condensed-vertical-track-container"
            >
                <div className={`condensed-vertical-track-bar ${variantBackGroundColor}`} style={{ width: sortedWidth, }} />
            </div> */}
        </>
    )

}


export default ThumbnailTrack;

