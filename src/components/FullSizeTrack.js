import React from "react";
import '../styles/CSS/main.css';
import { getDefaultNormalizer } from "@testing-library/react";
import { removeTV } from "../app/utilities/removeTaylorsVersion";
import FullSizeTrackBasic from './FullSizeTrackBasic';
import FullSizeTrackDuration from './FullSizeTrackDuration';
import FullSizeTrackExplicit from './FullSizeTrackExplicit';
import FullSizeTrackPreference from "./FullSizeTrackPreference";

const FullSizeTrack = ({ track, sortType }) => {


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
  
    const albumBackgroundColor = 'background-color-' + track.era + '-' + variant;
    const albumColor = 'color-' + track.era + '-' + variant;


    // pick the right option: 

    const Track = ({ track }) => {
  
        if (sortType === 'duration') {
            return <FullSizeTrackDuration track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }


        if (sortType === 'explicit') {
            return <FullSizeTrackExplicit track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }

        if (sortType === 'preference') {
          return <FullSizeTrackPreference track={track} albumBackgroundColor={albumBackgroundColor} albumColor={albumColor}/>;
        }
        return null; 
    };


    return (
        <>
            <Track track={track} id={track.id}/>
        </>
    );
};


export default FullSizeTrack;
