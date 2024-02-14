import React from "react";
import '../styles/CSS/main.css';


const Track = ({ track, index, albumTitle }) => {


  const albumBackgroundColor = 'background-color-' + albumTitle;
  const albumColor = 'color-' + albumTitle;


  return (
    <>
      <div className="track-container">

        <div className={`track-bar ${albumBackgroundColor}`} />
        <div className="track-title-container" >
          <p className={`track-title ${albumColor}`} style={{display: 'none'}}>{track}</p>
        </div>

      </div>

    </>
  );
};


export default Track;
