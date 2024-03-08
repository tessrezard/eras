import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrack = ({ track, sortType, setTrackName, setTrackEraColor }) => {


  let sortedHeight = '100px';
  if (track) {
    switch (sortType) {

      case 'duration':
        const duration_ms = track.duration_ms;
        const durationInPx = ((duration_ms / 1000) / 2) + 'px';
        sortedHeight = durationInPx;
        break;

      case 'preference':
        const points = track.points;
        const preferenceInPx = ((points * 20) + 'px');
        sortedHeight = preferenceInPx
        break;

      case 'explicit':
        let explicitInPx;
        if (track.explicit) {
          explicitInPx = ('100px');
        } else {
          explicitInPx = ('5px');
        }
        sortedHeight = explicitInPx;
        break;

      default:
        sortedHeight = '100px';
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
  const albumColor = 'color-' + track.era + '-' + variant;



  const handleHover = () => {
    setTrackName(track.name);
    setTrackEraColor(albumColor);
  };

  const handleMouseLeave = () => {
    setTrackName('');

  };
  

  const handleClick = () => {
    setTrackName(track.name);
    setTrackEraColor(albumColor);
  };

  return (
    <>

      <div className="condensed-track-container"
        onMouseEnter={handleHover}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>

        {/* <div className="condensed-condensed-album-title-container " >
          <p className={`condensed-album-title ${albumColor}`}>{track.albumName}</p>
        </div>

        <div className="condensed-track-title-container " >
          <p className={`condensed-track-title ${albumColor}`}>{track.name}</p>
        </div> */}

        <div className={`condensed-track-bar ${albumBackgroundColor}`} style={{ height: sortedHeight, }} />
      </div>


    </>
  );
};


export default CondensedTrack;
