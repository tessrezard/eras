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

const QuizPage = () => {

// for OrderOptions, to view tracks in era order or preference order 
  const [orderOption, setOrderOption] = useState('eraOrderOption')

  // for Filters, initialize with allTracks from database 
  const [filteredTracks, setFilteredTracks] = useState(allTracks);


  const defaultPoints = filteredTracks.length / 2;
  const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));
  const [rankedTracks, setRankedTracks] = useState(defaultPointsTracks);
  const [tracksToSort, setTracksToSort] = useState([...filteredTracks]);

  const defaultFilters = ['remix', 'live', 'acoustic', 'single'];



  useEffect(() => {
    // Update rankedTracks after filteredTracks has been updated
    const defaultPoints = filteredTracks.length / 2;
    const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));
    setRankedTracks(defaultPointsTracks);
    setTracksToSort(filteredTracks);
  }, [filteredTracks]);

  // I cant find the error that is causing issues with filteredTracks in quiz, so for now this catches those errors. 
  const tracksForQuiz = filteredTracks.filter(track => track.eraIndex != -1);


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

      <Condensed tracks={rankedTracks} sortType='preference' />

      {tracksForQuiz ?
        (<>
          <Quiz
            tracks={tracksForQuiz}
            setRankedTracks={setRankedTracks}
            rankedTracks={rankedTracks}
            setTracksToSort={setTracksToSort}
          />
        </>) : (<></>)}

      <h3>tracks to sort {tracksToSort.length}</h3>
      <h3>filtered {filteredTracks.length}</h3>
      <h3> ranked {rankedTracks.length}</h3>

      <Condensed tracks={rankedTracks} sortType='preference' />
      <FullSizeAllTracks tracks={rankedTracks} sortType='preference' orderOption={orderOption} />

    </>
  );
};


export default QuizPage;
