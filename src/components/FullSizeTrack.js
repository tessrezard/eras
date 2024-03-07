import React from "react";
import '../styles/CSS/main.css';
import { getDefaultNormalizer } from "@testing-library/react";
import { removeTV } from "../app/utilities/removeTaylorsVersion";
import FullSizeTrackBasic from './FullSizeTrackBasic';
import FullSizeTrackDuration from './FullSizeTrackDuration';
import FullSizeTrackExplicit from './FullSizeTrackExplicit';

const FullSizeTrack = ({ track, type, sortType }) => {

    const albumBackgroundColor = 'background-color-' + track.era;
    const albumColor = 'color-' + track.era;


    // pick the right option: 

    const Track = ({ track }) => {
        if (type === 'eraOrder') {
            return <FullSizeTrackBasic  track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }

        if (sortType === 'duration') {
            return <FullSizeTrackDuration track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }


        if (sortType === 'explicit') {
            return <FullSizeTrackExplicit track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }
        return null; // No image or thumbnail provided
    };


    return (
        <>
            <Track track={track} id={track.id}/>

        </>
    );
};


export default FullSizeTrack;
