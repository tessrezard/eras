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



  const [orderOption, setOrderOption] = useState('eraOrderOption')
  const [filteredTracks, setFilteredTracks] = useState([...allTracks]);
  const defaultPoints = filteredTracks.length / 2;
  const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));
  const [rankedTracks, setRankedTracks] = useState(defaultPointsTracks);
  const [tracksToSort, setTracksToSort] = useState([...filteredTracks]);


const defaultFilters = ['remix', 'live', 'acoustic', 'single'];

//   let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 628,2345, 23, 2, 344, 45,556, 66 ];
// quicksort(myArray, 0, myArray.length - 1);
// console.log(myArray);

  useEffect(() => {
    setRankedTracks(defaultPointsTracks);
  }, [filteredTracks])



  return (
    <>
      <OrderOptions sorting='Preference' orderOption={orderOption} setOrderOption={setOrderOption} />
      <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} defaultFilters={defaultFilters}/>

      <Quiz tracks={filteredTracks} setRankedTracks={setRankedTracks} rankedTracks={rankedTracks} setTracksToSort={setTracksToSort} />
      <h3>tracks to sort {tracksToSort.length}</h3>
      <h3>filtered {filteredTracks.length}</h3>
      <h3> ranked {rankedTracks.length}</h3>




      <Condensed tracks={rankedTracks} sortType='preference' />
      <FullSizeAllTracks tracks={rankedTracks} sortType='preference' orderOption={orderOption} />

    </>
  );
};


export default QuizPage;
