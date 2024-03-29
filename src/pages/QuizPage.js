import React, { useState, useEffect } from "react";
import '../styles/CSS/main.css';

import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
// import Quiz from "../components/Quiz";
// import Quiz from "../components/Quiz-quicksort";
import Quiz from "../components/Quiz-mergesort";
import Condensed from "../components/Condensed";
import FullSizeAllTracks from "../components/FullSizeAllTracks";
import QuizContent from "../app/utilities/quicksort";
import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";
import { useDispatch, useSelector } from 'react-redux';
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";

const QuizPage = () => {

  // for OrderOptions, to view tracks in era order or preference order 
  const [orderOption, setOrderOption] = useState('eraOrderOption')

  // for Filters, initialize with allTracks from database 
  // const [filteredTracks, setFilteredTracks] = useState(allTracks);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const defaultFilters = ['remix', 'live', 'acoustic', 'single'];

  // const [pairs, setPairs] = useState(splitIntoPairs(filteredTracks, filteredTracks));
  const [pairs, setPairs] = useState(true);

  useEffect(() => {
    setPairs(splitIntoPairs(filteredTracks, filteredTracks));
    const defaultPoints = 50;
    const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));
  
  
  }, [filteredTracks])
  
  return (
    <>
      <OrderOptions
        sorting='Preference'
        orderOption={orderOption}
        setOrderOption={setOrderOption}
      />

      <Filters
        inputTracks={allTracks}
        setFiltered={setFilteredTracks}
        defaultFilters={defaultFilters}
      />



      {pairs.length ? (
        <>
          <Quiz
            tracks={filteredTracks}
            initialPairs={pairs}
          // graphTracks={defaultPointsTracks}
          />
        </>
        ) : (<></>)}

      {/* <Condensed tracks={defaultPointsTracks} sortType='preference' /> */}
      {/* <FullSizeAllTracks tracks={defaultPointsTracks} sortType='preference' orderOption={orderOption} /> */}

    </>
  );
};


export default QuizPage;
