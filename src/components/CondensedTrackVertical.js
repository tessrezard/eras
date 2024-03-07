import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrackVertical = ({ track, sortType, setTrackName, setTrackEraColor }) => {

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
        sortedWidth = preferenceInPx;
        break;
      case 'explicit':
        let explicitInPx;
        if (track.explicit) {
          explicitInPx = ('100px');
        } else {
          explicitInPx = ('5px');
        }
        sortedWidth = explicitInPx;
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

  const handleHover = () => {
    setTrackName(track.name);
    setTrackEraColor(albumColor);
    console.log(albumColor);
  };

  const handleMouseLeave = () => {
    setTrackName('');

  };

  const handleClick = () => {
    // setTrackName(track.name);
    // setTrackEraColor(albumColor);
    // console.log(albumColor);
    const targetElement = document.getElementById(track.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

  };



  return (
    <>

      <div
        className="condensed-vertical-track-container"
        onMouseEnter={handleHover}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        
        

        <div className={`condensed-vertical-track-bar ${albumBackgroundColor}`} style={{ width: sortedWidth, }} />
      </div>


    </>
  );
};


export default CondensedTrackVertical;
