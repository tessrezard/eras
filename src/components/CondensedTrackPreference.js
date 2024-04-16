import React from "react";
import '../styles/CSS/main.css';
import CondensedTrackVertical from "./CondensedTrack-Vertical";
import CondensedTrackHorizontal from "./CondensedTrack-Horizontal";



const CondensedTrackPreference = ({ track, setTrackName, setTrackEraColor }) => {


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


    // EVENT HANDLERS --------------------------------------------
    const handleHover = () => {
        setTrackName(track.name);
        setTrackEraColor(variantColor);
    };
    const handleMouseLeave = () => {
        setTrackName('');
    };
    const handleClick = () => {
        setTrackName(track.name);
        setTrackEraColor(variantColor);
    };
    // -------------------------------------------------------------

    let sortedWidth = '200px';
     if (track) {
    const pointsInPx = (points * 0.75) + 'px';
    sortedWidth = pointsInPx;
 }
 
    let sortedHeight = '300px';
    if (track) {
        const pointsInPx = (points * 0.75) + 'px';
        sortedHeight = pointsInPx;
    }


    return (
        <>
           <CondensedTrackVertical
                sortedWidth={sortedWidth}
                variantBackGroundColor={variantBackGroundColor}
                handleHover={handleHover}
                handleClick={handleClick}
                handleMouseLeave={handleMouseLeave}
                />

            <CondensedTrackHorizontal
                sortedHeight={sortedHeight}
                variantBackGroundColor={variantBackGroundColor}
                handleHover={handleHover}
                handleClick={handleClick}
                handleMouseLeave={handleMouseLeave}
                />
        </>
    )

}


export default CondensedTrackPreference;

