import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';


const CondensedTrackHorizontal = ({ sortedHeight, variantBackGroundColor, handleHover, handleClick, handleMouseLeave }) => {
    return (
      <>
      <div className="condensed-track-container"
          onMouseEnter={handleHover}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}>
          <div className={`condensed-track-bar ${variantBackGroundColor}`} style={{ height: sortedHeight, }} />
      </div>
  </>
  );

};


export default CondensedTrackHorizontal;
