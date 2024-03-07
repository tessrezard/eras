import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
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


    // console.log(prepForAudioFeatures(allTracks));
    // NOTE: the styling for all the filters & options are in the Filters.scss file. 
    return (
        <>
            <SortOptions sorting={sorting} setSorting={setSorting} />
            <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
            <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} />
            <h1 className="sort-options-header">Sorted by {sorting}</h1>

            <div style={{ margin: 'auto' }}>
                <h2> Condensed View </h2>
                <Condensed tracks={filteredTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} directionUp={true} />
            </div>

            <div style={{ margin: 'auto' }}>
                <h2> Extended View</h2>

                <FullSizeAllTracks tracks={filteredTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} />

            </div>

        </>
    );
};


export default SortedByPage;
