import React from "react";
import '../styles/CSS/main.css';


const CondensedTrack = ({ track, type }) => {

  let variant = track.trackVariant
  console.log(track.trackVariant);
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

        <div className={`condensed-track-bar ${albumBackgroundColor}`} style={{ height: durationInPx }} />


      </div>



    </>
  );
};


export default CondensedTrack;
