import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import CondensedTrackVertical from "./CondensedTrack-Vertical";
import CondensedTrackHorizontal from "./CondensedTrack-Horizontal";



const CondensedTrackExplicit = ({ track, setTrackName, setTrackEraColor }) => {

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

    let sortedWidth = '100px';
    if (track) {
        let explicitInPx;
        if (track.explicit) {
            explicitInPx = ('200px');
        } else {
            explicitInPx = ('15px');
        }
        sortedWidth = explicitInPx;
    }

    let sortedHeight = '100px';
        if (track) {
            let explicitInPx;
            if (track.explicit) {
                explicitInPx = ('150px');
            } else {
                explicitInPx = ('5px');
            }
            sortedHeight = explicitInPx;
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


export default CondensedTrackExplicit;

