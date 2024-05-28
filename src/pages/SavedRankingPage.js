import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { Link, useParams } from "react-router-dom";
import DisplaySavedRankings from "../components/Saved-DisplaySavedRankings";
import { getItemFromLocal } from "../app/utilities/getItemFromLocal";
import Condensed from "../components/Condensed";
import OrderOptions from "../components/OrderOptions";
import FullSizeAllTracks from "../components/FullSizeAllTracks";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";
import QuizSortedItem from "../components/QuizSortedItem";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";

const SavedRankingPage = () => {

    let { id } = useParams();
    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Preference")
    const [graphTab, setGraphTab] = useState(true)


    const toggleGraphTab = () => {
        setGraphTab(true);
    };

    const toggleListTab = () => {
        setGraphTab(false);
    };


    let orderKeyWord = 'era';
    switch (orderOption){
        case 'eraOrderOption':
            orderKeyWord = 'era';
            break;
        case 'sortedOrderOption': 
            orderKeyWord = 'ranked';
            break;
    }
   

    useEffect(() => {
        // fetchItem();
    }, [id]);


    let item;
    let rankingName;
    let graphTracks;
    let reverseTracks;
    if (id) {
        item = getItemFromLocal(id);
        rankingName = item?.key.substring("savedRanking-".length).split("-")[0];
        graphTracks = updateGraphTracks(item?.tracks);
        reverseTracks = reverseEraOrder(graphTracks);

    }

    

    console.log('graphTracks', graphTracks)

    return (
        <>
            <div>
                <h1 className="saved-ranking-title">{rankingName}</h1>

                <div className="tab-toggle-buttons-container">
                    <button onClick={toggleGraphTab} className={`tab-toggle-btn ${graphTab ? 'activeToggleTabBtn' : ''}`} >
                        Graphs
                    </button>
                    <button onClick={toggleListTab} className={`tab-toggle-btn ${!graphTab ? 'activeToggleTabBtn' : ''}`}  >
                        List
                    </button>
                </div>




                {graphTab ? (
                    <div className={`tab-container ${graphTab ? ' graph-tab ' : ''}`}>
                        {/* Content for Graph view */}
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
                        </div>        </div>
                ) : (
                    <div className={`tab-container ${!graphTab ? ' list-tab ' : ''}`}>
                        {/* Content for List view */}

                        <div>
                            {item.tracks.map((item, index) => {
                                return (
                                    <QuizSortedItem item={item} index={index} key={index} />
                                )
                            })}
                        </div>
                    </div>

                )}


            </div>




            <Link className="home-link-button" to={'/quiz'}>Take the Quiz Again</Link>


        </>
    );
};


export default SavedRankingPage;
