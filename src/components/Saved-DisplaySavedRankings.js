

import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import { getItemsStartingWith } from "../app/utilities/getItemsStartingWith-fromLocalStorage";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import Condensed from "./Condensed";
import SavedItem from "./Saved-SavedItem";
import OrderOptions from "./OrderOptions";

const DisplaySavedRankings = () => {

    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Preference")



    const getSavedRankings = () => {
        // - get from local storage
        const savedItems = getItemsStartingWith("savedRanking-");
        console.log('savedItems', savedItems);
        
        // - sort by timestamp
        if (savedItems && Array.isArray(savedItems)) {
            // Function to extract the timestamp from the key
            const extractTimestamp = (key) => {
                return parseInt(key.slice(-13), 10);
            };
        
            // Implementing Bubble Sort to sort the items by timestamp in descending order
            let n = savedItems.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (extractTimestamp(savedItems[j].key) < extractTimestamp(savedItems[j + 1].key)) {
                        // Swap the items
                        let temp = savedItems[j];
                        savedItems[j] = savedItems[j + 1];
                        savedItems[j + 1] = temp;
                    }
                }
            }
        
            // Log the sorted array
            console.log('savedItems sorted', savedItems);
        }

        return savedItems;
    }




    getSavedRankings();

    // console.log(getSavedRankings())


    return (
        <>
            <div className="saved-page-container">

                    <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
                    <div className="saved-grid-container">

                {getSavedRankings().map((item, index) => {
                    return (<>
                        <SavedItem item={item} orderOption={orderOption}/>
                        
                    </>

                    )
                })}

            </div>
            </div>

        </>
    )
}


export default DisplaySavedRankings;

;