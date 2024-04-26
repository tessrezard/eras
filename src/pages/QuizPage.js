import React, { useState, useEffect } from "react";
import '../styles/CSS/main.css';

import Filters from "../components/Filters";
import OrderOptions from "../components/OrderOptions";
import Quiz from "../components/Quiz-mergesort";
// import { allTracks } from "../app/data/current_data/all_tracks";
import { allTracks } from "../app/data/current_data/all_tracks_update";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import ReloadButton from "../components/ReloadButton";
import FilterAlbums from "../components/FilterAlbums";
import { filterByAlbum } from "../app/utilities/filterByAlbum";
import { albumsList, erasList } from "../app/utilities/globalVariables";

const QuizPage = () => {

  // for OrderOptions, to view tracks in era order or preference order 
  // for Filters, initialize with allTracks from database 
  // const [filteredTracks, setFilteredTracks] = useState(allTracks);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [started, setStarted] = useState(false);
  const defaultFilters = ['remix', 'live', 'acoustic', 'single'];
  const defaultAlbums = albumsList;

  const [pairs, setPairs] = useState(true);


  console.log('filteredTracks', filteredTracks)
  // Function to handle saving data to localStorage
  const saveLatestToLocalStorage = (tracks) => {
    localStorage.setItem('latestSortedTracks', JSON.stringify(tracks));
  };

  const saveOddPairToLocalStorage = (oddPair) => {
    localStorage.setItem('oddPair', JSON.stringify(oddPair));
  };

  const saveOddPieceToLocalStorage = (oddPiece) => {
    localStorage.setItem('oddPiece', JSON.stringify(oddPiece));
  };

  const removeLatestFromLocalStorage = () => {
    localStorage.removeItem('latestSortedTracks');
    localStorage.removeItem('oddPair');
    localStorage.removeItem('oddPiece');

  };

  useEffect(() => {
    // setPairs(splitIntoPairs(filteredTracks, filteredTracks));
    setPairs(splitIntoPairs(filteredTracks, filteredTracks));
    const defaultPoints = 50;
    const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));

  }, [filteredTracks])

  return (
    <>
      <div className="quiz-reload-btn-container">
        <ReloadButton          
          removeLatestFromLocalStorage={removeLatestFromLocalStorage}
          />
      </div>
      {started ? (
        <></>) : (<>
          <Filters
            inputTracks={allTracks}
            setFiltered={setFilteredTracks}
            defaultFilters={defaultFilters}
          />

          {/* <FilterAlbums
          inputTracks={filteredTracks}
          setFiltered={setFilteredTracks}
          defaultAlbums={defaultAlbums}
          /> */}
          </>
          )}



      {pairs.length ? (
        <>
          <Quiz
            tracks={filteredTracks}
            initialPairs={pairs}
            setStarted={setStarted}
            saveLatestToLocalStorage={saveLatestToLocalStorage}
            saveOddPairToLocalStorage={saveOddPairToLocalStorage}
            saveOddPieceToLocalStorage={saveOddPieceToLocalStorage}
          />
        </>
      ) : (<></>)}

    </>
  );
};


export default QuizPage;
