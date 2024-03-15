import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrackVertical = ({ sortedWidth, variantBackGroundColor, variantColor, handleHover, handleClick, handleMouseLeave }) => {
    return (
    <>
      <div
        className="condensed-vertical-track-container"
        onMouseEnter={handleHover}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className={`condensed-vertical-track-bar ${variantBackGroundColor}`} style={{ width: sortedWidth, }} />
      </div>
    </>
  );

};


export default CondensedTrackVertical;
