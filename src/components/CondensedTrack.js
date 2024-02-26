import React from "react";
import '../styles/CSS/main.css';


const CondensedTrack = ({ track, sortType }) => {

  if (sortType === !'duration'){
    console.log(sortType);

  }

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
        const preferenceInPx =((points * 20) + 'px');
        sortedHeight = preferenceInPx
        break;

      default :
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
  const albumColor = 'color-' + track.era;

  const duration_ms = track.duration_ms;
  const durationInPx = ((duration_ms / 1000) / 2) + 'px';



  return (
    <>

      <div className="condensed-track-container">

        <div className="condensed-condensed-album-title-container " >
          <p className={`condensed-album-title ${albumColor}`}>{track.albumName}</p>
        </div>

        <div className="condensed-track-title-container " >
          <p className={`condensed-track-title ${albumColor}`}>{track.name}</p>
        </div>


        <div className={`condensed-track-bar ${albumBackgroundColor}`} style={{ height: sortedHeight }} />


      </div>



    </>
  );
};


export default CondensedTrack;
