
import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import FullSizeAllTracks from "./FullSizeAllTracks";
import SaveRanking from "./Quiz-SaveRanking";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import QuizSortedItem from "./QuizSortedItem";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { allTracks } from "../app/data/current_data/all_tracks";
import OrderOptions from "../components/OrderOptions";



const QuizFinished = ({ latestSortedTracks, rankingSaved, setRankingSaved }) => {

    const quizFinalGraphsRef = useRef(null);


    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Preference")

    const finalSorted = latestSortedTracks[0];

    let orderKeyWord;

    switch (orderOption) {
        case ('eraOrderOption'):
            orderKeyWord = 'era';
            break;
        case ('sortedOrderOption'):
            orderKeyWord = 'your preference';
            break;
    }
    // Function to handle saving data to localStorage
    const scrollToGraphs = () => {
        quizFinalGraphsRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    const graphTracks = updateGraphTracks(latestSortedTracks);


    return (
        <>
            <div className="quiz-finished-container">
            <h1>Finished! </h1>

                <SaveRanking
                    finalSorted={finalSorted}
                    graphTracks={graphTracks}
                    rankingSaved={rankingSaved}
                    setRankingSaved={setRankingSaved} 
                />


                <button className="quiz-finished-button" onClick={scrollToGraphs}>
                    <p>See Graphs</p>
                    <p className="quiz-scrollTo-btn-arrow">➸</p>
                </button>


                <div className="quiz-final-list-container">
                    <h2 className="quiz-final-list-header" >Here is your ranked list: </h2>
                    {finalSorted.map((item, index) => {
                        return (
                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })}
                </div>


                <div ref={quizFinalGraphsRef} className="quiz-final-graphs-container">
                    <h2 className="quiz-final-list-header" >Here is your data visualisation: </h2>

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
                        <h3>Songs in {orderKeyWord} order</h3>
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


