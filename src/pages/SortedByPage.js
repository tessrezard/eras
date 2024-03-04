import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";
import Quiz from "../components/Quiz";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";
import { useDispatch, useSelector } from 'react-redux';
import Legend from "../components/Legend";
import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
import SortOptions from "../components/SortOptions";


const SortedByPage = () => {
    const reverseTracks = reverseEraOrder(allTracks);
    const [filteredTracks, setFilteredTracks] = useState([allTracks]);
    const [orderOption, setOrderOption] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Duration")

    console.log('filteredTracks', filteredTracks)


    // NOTE: the styling for all the filters & options are in the Filters.scss file. 
    return (
        <>
            <SortOptions sorting={sorting} setSorting={setSorting}/>
            <OrderOptions sorting={sorting} orderOption={orderOption} setOrderOption={setOrderOption} />
            <Filters  inputTracks={allTracks} setFiltered={setFilteredTracks} />
           
           

           <h2> Condensed View </h2>
            <Condensed tracks={filteredTracks} sortType='duration' orderOption={orderOption} directionUp={true}/>




            <div className="horizontal-chronology">
            </div>
            <h2> Extended View</h2>

            <VerticalChronology tracks={filteredTracks} orderOption={orderOption} />
        </>
    );
};


export default SortedByPage;
