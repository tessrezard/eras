import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrackVertical = ({ track, sortType }) => {


  let sortedWidth = '100px';
  if (track) {
    switch (sortType) {

      case 'duration':
        const duration_ms = track.duration_ms;
        const durationInPx = ((duration_ms / 1000) / 2) + 'px';
        sortedWidth = durationInPx;
        break;

      case 'preference':
        const points = track.points;
        const preferenceInPx = ((points * 20) + 'px');
        sortedWidth = preferenceInPx
        break;

      default:
        sortedWidth = '100px';
    }
  }

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
  const albumColor = 'color-' + track.era;


  const duration_ms = track.duration_ms;
  const durationInPx = ((duration_ms / 1000) / 2) + 'px';



  return (
    <>

      <div className="condensed-vertical-track-container">
        <div className="condensed-vertical-album-title-container " >
          <p className={`condensed-vertical-album-title ${albumColor}`}>{track.albumName}</p>
        </div>

        <div className="condensed-vertical-track-title-container " >
          <p className={`condensed-vertical-track-title ${albumColor}`}>{track.name}</p>
        </div>

        <div className={`condensed-vertical-track-bar ${albumBackgroundColor}`} style={{ width: sortedWidth, }} />
      </div>


    </>
  );
};


export default CondensedTrackVertical;
