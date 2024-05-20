

import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import { getItemsStartingWith } from "../app/utilities/getItemsStartingWith-fromLocalStorage";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import Thumbnail from "./Saved-Thumbnail";


const SavedItem = ({ item, orderOption }) => {

    const key = item.key;
    // parse item data : 
    const itemName = key;
    let withoutPrefix = itemName.substring("savedRanking-".length); // Removes the prefix
    let withoutSuffix = withoutPrefix.split("-")[0]; // Removes the suffix
    


    return (
        <div className="saved-item">
            <p className="saved-item-name">{withoutSuffix}</p>
            <Thumbnail
                tracks={updateGraphTracks(item.value)}
                sortType='preference'
                // orderOption='eraOrderOption'
                orderOption={orderOption}
                directionUp={true}
            />
        </div>
    )
}


export default SavedItem;

;