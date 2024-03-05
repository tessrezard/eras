import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
import SortOptions from "../components/SortOptions";
import DisplayFullSizeTracks from "../components/DisplayFullSizeTracks";


const SortedByPage = () => {
    const reverseTracks = reverseEraOrder(allTracks);
    const [filteredTracks, setFilteredTracks] = useState([allTracks]);
    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Duration")

    console.log('filteredTracks', filteredTracks)


    // NOTE: the styling for all the filters & options are in the Filters.scss file. 
    return (
        <>
            <SortOptions sorting={sorting} setSorting={setSorting} />
            <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
            <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} />


            <h2> Condensed View </h2>
            <Condensed tracks={filteredTracks} sortType='duration' orderOption={orderOption} directionUp={true} />




            <div className="horizontal-chronology">
            </div>
            <h2> Extended View</h2>


            <DisplayFullSizeTracks tracks={filteredTracks} orderOption={orderOption} />

        </>
    );
};


export default SortedByPage;
