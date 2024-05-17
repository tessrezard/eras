

import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import { getItemsStartingWith } from "../app/utilities/getItemsStartingWith-fromLocalStorage";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import Condensed from "./Condensed";
const DisplaySavedRankings = () => {


    const getSavedRankings = () => {
        // localStorage.getItem(finalRankingName, tracksString);
        const savedItems = getItemsStartingWith("savedRanking-");
        console.log(savedItems);
        // const graphTracks = updateGraphTracks(finalSorted);
        return savedItems;
    }



    getSavedRankings();

    console.log(getSavedRankings())


    return (
        <>
            <div className="quiz-SaveRanking-container">
                {getSavedRankings().map((item, index) => {
                    return (<>
                        <p>{item.key}</p>
                        <Condensed
                            tracks={updateGraphTracks(item.value)}
                            sortType='preference'
                            // orderOption='eraOrderOption'
                            orderOption='era'
                            directionUp={true}
                        />
                    </>

                    )
                })}

            </div>

        </>
    )
}


export default DisplaySavedRankings;

;