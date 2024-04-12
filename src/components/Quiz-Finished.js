
import React, { useState, useEffect, useReducer } from "react";
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import FullSizeAllTracks from "./FullSizeAllTracks";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import QuizSortedItem from "./QuizSortedItem";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { allTracks } from "../app/data/current_data/all_tracks";
import OrderOptions from "../components/OrderOptions";



const QuizFinished = ({ latestSortedTracks }) => {


    const reverseTracks = reverseEraOrder(allTracks);

    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Preference")

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
                <button className="quiz-finished-save-button" onClick={saveToLocalStorage}>Save to Local Storage</button>
                

                <div className="quiz-final-list">
                    {latestSortedTracks[0].map((item, index) => {
                        return (
                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })}
                </div>
                
                <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />

                <Condensed
                    tracks={graphTracks}
                    sortType='preference'
                    // orderOption='eraOrderOption'
                    orderOption={orderOption} 
                    directionUp={true}
                />



                <FullSizeAllTracks
                    tracks={graphTracks}
                    sortType='preference'
                    // orderOption='eraOrderOption'
                    orderOption={orderOption}
                />
            </div>

        </>
    )

}


export default QuizFinished;


