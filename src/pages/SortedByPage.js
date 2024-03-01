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


const SortedByPage = () => {
    const reverseTracks = reverseEraOrder(allTracks);
    const [filteredTracks, setFilteredTracks] = useState([allTracks]);
    const [ orderOption, setOrderOption ] = useState('eraOrderOption')
    const [sorting, setSorting] = useState("Medium")

    const onOptionChange = e => {
        setSorting(e.target.value)
    }

    console.log('filteredTracks', filteredTracks)

const handleOrderOptionsClick = (order) => {
    setOrderOption(order);
}
    return (
        <>
            <h1>Sorted by {sorting}</h1>
            <div>
                <form>
                    <input
                        type="radio"
                        name="topping"
                        value="Duration"
                        id="duration"
                        checked={sorting === "Duration"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="duration">Duration</label>
                </form>

            </div>

            <div>
            < div className="sorted-by-order-options">
            <input
                className="filter-button"
                type="radio"
                checked={orderOption === "eraOrderOption"}
                value="eraOrderOption"
                id="eraOrderOption"
                onChange={() => handleOrderOptionsClick('eraOrderOption')}
            />
            <label htmlFor='eraOrderOption'> Era Order </label>
            
            <input
                className="filter-button"
                type="radio"
                checked={orderOption === "durationOrderOption"}
                value="durationOrderOption"
                id="durationOrderOption"
                onChange={() => handleOrderOptionsClick('durationOrderOption')}
            />
            <label htmlFor='durationOrderOption'> Duration Order </label>

        </div>
            </div>
            <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} />
            <Condensed tracks={filteredTracks} sortType='duration' orderOption='eraOrderOption' />
            
            <Condensed tracks={filteredTracks} sortType='duration' orderOption='durationOrderOption' />

            <div className="horizontal-chronology">
            </div>
            <VerticalChronology tracks={filteredTracks} orderOption={orderOption}/>
        </>
    );
};


export default SortedByPage;
