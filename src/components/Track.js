import React from "react";
import '../styles/CSS/main.css';


const Track = ({ track, index, albumTitle }) => {


  const albumBackgroundColor = 'background-color-' + albumTitle;


  return (
    <>
      <div className="track-and-name">
        <div className={`track-bar ${albumBackgroundColor}`} >
        </div>

      </div>

    </>
  );
};


export default Track;
