import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrack = ({ track, sortType }) => {

  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const [ phoneWidth, setPhoneWidth] = useState();

  // useEffect(() => {
    // const handleResize = () => {
    //   setViewportWidth(window.innerWidth);
    // };
    // Add event listener for window resize
    // window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    // if (viewportWidth <= 470) {
    //   setPhoneWidth(true)
    // } else if (viewportWidth > 470){
    //   setPhoneWidth(false)
    // }
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  // }, []); // Empty dependency array to run this effect only once on mount


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
  // console.log('viewportWidth', viewportWidth)

  // console.log('phoneWidth', phoneWidth);

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

        {/* {viewportWidth && viewportWidth < 470? (
        <div className={`condensed-track-bar ${albumBackgroundColor}`} style={{ width: sortedHeight }} />
        ) : (
        <div className={`condensed-track-bar ${albumBackgroundColor}`} style={{ height: sortedHeight }} />
      )} */}


        <div 
        className={`condensed-track-bar ${albumBackgroundColor}`} 
        style={{ height: sortedHeight, }} />

      </div>



    </>
  );
};


export default CondensedTrack;
