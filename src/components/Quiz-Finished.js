
import React, { useState, useEffect, useReducer } from "react";
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import FullSizeAllTracks from "./FullSizeAllTracks";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import QuizSortedItem from "./QuizSortedItem";
// 

const QuizFinished = ({ latestSortedTracks }) => {


    // Function to handle saving data to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('sorted-tracks', JSON.stringify(latestSortedTracks[0])); // 'myData' is the key used to store data in localStorage
    };


        const graphTracks = updateGraphTracks(latestSortedTracks);
        console.log('graphTracks', graphTracks);

        return (
            <>
                <div className="quiz-all-sorted">
                    <h3> You're all sorted ! </h3>

                    <Condensed
                        tracks={graphTracks}
                        sortType='preference'
                        orderOption='eraOrderOption' />
                    <button onClick={saveToLocalStorage}>Save to Local Storage</button>


                    {latestSortedTracks[0].map((item, index) => {
                        return (

                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })}
                </div>

            </>
        )
    
}


export default QuizFinished;


