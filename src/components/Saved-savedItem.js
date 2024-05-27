

import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import { getItemsStartingWith } from "../app/utilities/getItemsStartingWith-fromLocalStorage";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import Thumbnail from "./Saved-Thumbnail";
import { Link } from "react-router-dom";


const SavedItem = ({ item, orderOption, deleteItem }) => {

    // console.log('item', item);
    const key = item.key;
    // parse item data : 
    const itemName = key;
    let withoutPrefix = itemName.substring("savedRanking-".length); // Removes the prefix
    let withoutSuffix = withoutPrefix.split("-")[0]; // Removes the suffix

    const handleClick = (event) => {
        event.stopPropagation(); // Stop the propagation of the click event
        // Handle the button click event
        deleteItem(key)
    };


    const getKeyForURL = (key) => {
        const URL = key.slice(13);

        return URL;
    }


    return (<>
        <div className="saved-thumbnail-and-button-container">
            <Link to={`/saved/${getKeyForURL(item.key)}`}>
                <div className="saved-item">
                    <div className="saved-item-header" >
                        <p className="saved-item-name">{withoutSuffix}</p>

                    </div>

                    <Thumbnail
                        tracks={updateGraphTracks(item.value)}
                        sortType='preference'
                        // orderOption='eraOrderOption'
                        orderOption={orderOption}
                        directionUp={true}
                    />
                </div>
            </Link>
            <button
                onClick={handleClick}
                className="saved-item-delete-btn"
            >
                x
            </button>
        </div >

    </>
    )
}


export default SavedItem;

;