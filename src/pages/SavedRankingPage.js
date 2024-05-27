import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import { Link, useParams } from "react-router-dom";
import DisplaySavedRankings from "../components/Saved-DisplaySavedRankings";
import { getItemFromLocal } from "../app/utilities/getItemFromLocal";
import Condensed from "../components/Condensed";
import OrderOptions from "../components/OrderOptions";
import FullSizeAllTracks from "../components/FullSizeAllTracks";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";

const SavedRankingPage = () => {

    let { id } = useParams();
    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Preference")
    // const [item, setItem] = useState(null);

    console.log('id', id);

    // const fetchItem = async () => {
    //     const fetchedItem = await getItemFromLocal(id);
    //     const rankingName = item?.key.substring("savedRanking-".length).split("-")[0];
    //     const graphTracks = updateGraphTracks(item?.tracks);

    //     setItem(fetchedItem);
    // };

    useEffect(() => {
        // fetchItem();
    }, [id]);


    let item;
    let rankingName;
    let graphTracks;

    if (id) {
        item = getItemFromLocal(id);
        rankingName = item?.key.substring("savedRanking-".length).split("-")[0];
        graphTracks = updateGraphTracks(item?.tracks);
    }

    // const item =  getItemFromLocal(id);
    // const rankingName = item?.key.substring("savedRanking-".length).split("-")[0];

    // const graphTracks = updateGraphTracks(item?.tracks);




    console.log('graphTracks', graphTracks)

    return (
        <>
        {id? ( <div>
                <h1>{rankingName}</h1>
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
                    <h3>Songs in {orderOption} order</h3>
                    <FullSizeAllTracks
                        tracks={graphTracks}
                        sortType='preference'
                        // orderOption='eraOrderOption'
                        orderOption={orderOption}
                    />
                </div>

            </div>):(<></>)}
            {/* <div>
                <h1>{rankingName}</h1>
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
                    <h3>Songs in {orderOption} order</h3>
                    <FullSizeAllTracks
                        tracks={graphTracks}
                        sortType='preference'
                        // orderOption='eraOrderOption'
                        orderOption={orderOption}
                    />
                </div>

            </div> */}

            <Link className="home-link-button" to={'/quiz'}>Take the Quiz Again</Link>


        </>
    );
};


export default SavedRankingPage;
