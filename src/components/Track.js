import React from "react";
import '../styles/CSS/main.css';


const Track = ({track, index, albumTitle}) => {


    const albumBackgroundColor = 'background-color-' + albumTitle;


console.log(albumTitle);
  return (
    <>
        <div className={`track-container ${albumBackgroundColor}`} >
            
        </div>
    </>
  );
};


export default Track;
