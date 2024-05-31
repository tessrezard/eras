import React from "react";
import '../styles/CSS/main.css';
import CondensedTrackVertical from "./CondensedTrack-Vertical";
import CondensedTrackHorizontal from "./CondensedTrack-Horizontal";



const MiniCondensedTrack = ({ track, setTrackName, setTrackEraColor, totalNumTracks }) => {


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


    let sortedHeight = '70px';
    if (track) {
        const pointsInPx = (points * 0.3) + 'px';
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
            
        </>
    )

}


export default MiniCondensedTrack;

