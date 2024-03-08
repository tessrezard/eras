import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import CondensedTrackVertical from "./CondensedTrackVertical";
import CondensedTrackHorizontal from "./CondensedTrackHorizontal";



const CondensedTrackDuration = ({ track, setTrackName, setTrackEraColor }) => {

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
    const duration_ms = track.duration_ms;

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

    let sortedWidth = '100px';
    if (track) {
        const durationInPx = ((duration_ms / 1000) / 2) + 'px';
        sortedWidth = durationInPx;
    }



    let sortedHeight = '100px';
    if (track) {
        const durationInPx = ((duration_ms / 1000) / 2) + 'px';
        sortedHeight = durationInPx;
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


export default CondensedTrackDuration;

