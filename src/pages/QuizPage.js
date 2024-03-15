import React, { useState, useEffect } from "react";
import '../styles/CSS/main.css';

import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
import Quiz from "../components/Quiz";
import Condensed from "../components/Condensed";
import FullSizeAllTracks from "../components/FullSizeAllTracks";

import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";
import { useDispatch, useSelector } from 'react-redux';

const QuizPage = () => {



  const [orderOption, setOrderOption] = useState('eraOrderOption')
  const [filteredTracks, setFilteredTracks] = useState([...allTracks]);
  const defaultPoints = filteredTracks.length / 2;

  const [rankedTracks, setRankedTracks] = useState(
    filteredTracks.map(track => ({ ...track, points: defaultPoints }))
  );
  const [tracksToSort, setTracksToSort] = useState([...filteredTracks])

  console.log('rankedTracks find track', rankedTracks[144]);




  return (
    <>
      <OrderOptions sorting='Preference' orderOption={orderOption} setOrderOption={setOrderOption} />
      <Filters inputTracks={allTracks} setFiltered={setFilteredTracks} />
      
      <Quiz tracks={filteredTracks} setRankedTracks={setRankedTracks} rankedTracks={rankedTracks} setTracksToSort={setTracksToSort}/>
<h3>{tracksToSort.length}</h3>


      <Condensed tracks={rankedTracks} sortType='preference' />
      <FullSizeAllTracks tracks={rankedTracks} sortType='preference' orderOption={orderOption} />

    </>
  );
};


export default QuizPage;
