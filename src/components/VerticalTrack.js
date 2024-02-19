import React from "react";
import '../styles/CSS/main.css';


const VerticalTrack = ({ track, index, albumTitle }) => {


  const albumBackgroundColor = 'background-color-' + albumTitle;
  const albumColor = 'color-' + albumTitle;


  return (
    <>
      <div className="vertical-track-container">

        <div className={`vertical-track-bar ${albumBackgroundColor}`} />

        <div className="vertical-track-title-container " >
          <p className={`vertical-track-title ${albumColor}`}>{track}</p>
        </div>

      </div>

    </>
  );
};


export default VerticalTrack;
