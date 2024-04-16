
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
        localStorage.setItem('sorted-tracks', JSON.stringify(latestSortedTracks[0])); 
    };


    const graphTracks = updateGraphTracks(latestSortedTracks);
    console.log('graphTracks', graphTracks);

    return (
        <>
            <div className="quiz-finished-container">
                <h1> Well done! You're all sorted ! </h1>

                <button className="quiz-finished-save-button" onClick={saveToLocalStorage}>Save to Local Storage</button>


                <div className="quiz-final-list">
                    <h2 className="quiz-final-list-header" >Here is your ranked list: </h2>
                    {latestSortedTracks[0].map((item, index) => {
                        return (
                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })}
                </div>


                <div className="quiz-final-graphs">
                    <h2 className="quiz-final-list-header" >Here is your data vitalisation: </h2>

                    <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
                    <div className="quiz-final-graph-condensed">
                        <Condensed
                            tracks={graphTracks}
                            sortType='preference'
                            // orderOption='eraOrderOption'
                            orderOption={orderOption}
                            directionUp={true}
                        />
                    </div>


                    <div className="quiz-final-graph-fullSize">
                        <FullSizeAllTracks
                            tracks={graphTracks}
                            sortType='preference'
                            // orderOption='eraOrderOption'
                            orderOption={orderOption}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}


export default QuizFinished;


