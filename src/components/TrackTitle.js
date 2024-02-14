import React from "react";
import '../styles/CSS/main.css';


const TrackTitle = ({ track, index, albumTitle }) => {


  const albumBackgroundColor = 'background-color-' + albumTitle;
  const albumColor = 'color-' + albumTitle;


  return (
    <>
        <div className={`track-title-container ${albumColor}`}>
          <p>{track}</p>
        </div>
    </>
  );
};


export default TrackTitle;
