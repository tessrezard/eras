import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
import SortOptions from "../components/SortOptions";
import FullSizeAllTracks from "../components/FullSizeAllTracks";
import { prepForAudioFeatures } from "../app/utilities/prepForAudioFeatures";


const SortedByPage = () => {
    const reverseTracks = reverseEraOrder(allTracks);

    const [filteredTracks, setFilteredTracks] = useState([allTracks]);
    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Duration")
    // const [showCondensed, setShowCondensed] = useState(true);
    // console.log(showCondensed, 'showCondensed');
    
    // const handleShowClick = () => {
    //     setShowCondensed(prev => !prev);
    // };

    // console.log(prepForAudioFeatures(allTracks));
    // NOTE: the styling for all the filters & options are in the Filters.scss file. 
    return (
        <div>
            <h1 className="sort-options-header">Sorted by {sorting}</h1>
            <SortOptions sorting={sorting} setSorting={setSorting} />
            <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
            <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} />

            <div className="sorted-by-view-container" >
                <div className="sorted-by-view-header">
                    <button className={`sorted-by-view-arrow`}  >➸</button>
                    <h2>Condensed View</h2>
                </div>
                <Condensed tracks={filteredTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} directionUp={true} />
            </div>

            <div className="sorted-by-view-container" >
                <div className={`sorted-by-view-header `}>
                    <button className={`sorted-by-view-arrow `} >➸</button>
                    <h2>Extended View</h2>
                </div>
                <FullSizeAllTracks tracks={filteredTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} />

            </div>

        </div>
    );
};


export default SortedByPage;
