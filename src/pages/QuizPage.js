import React, { useState, useEffect } from "react";
import '../styles/CSS/main.css';

import FilterTypes from "../components/Filter-Types";
import FilterAlbums from "../components/Filter-Albums";

import Quiz from "../components/Quiz-mergesort";
// import { allTracks } from "../app/data/current_data/all_tracks";
import { allTracks } from "../app/data/current_data/all_tracks_update";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import ReloadButton from "../components/ReloadButton";
import { albumsList, erasList } from "../app/utilities/globalVariables";

const QuizPage = () => {

  // for OrderOptions, to view tracks in era order or preference order 
  // for Filters, initialize with allTracks from database 

  const [typeFilteredTracks, setTypeFilteredTracks] = useState(allTracks);
  const [albumFilteredTracks, setAlbumFilteredTracks] = useState(allTracks);

  const [filteredTracks, setFilteredTracks] = useState(allTracks);

  const [started, setStarted] = useState(false);
  const [pairs, setPairs] = useState(true);



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
    // setPairs(splitIntoPairs(typeFilteredTracks, filteredTracks));
    setPairs(splitIntoPairs(filteredTracks, filteredTracks));
    const defaultPoints = 50;
    const defaultPointsTracks = filteredTracks.map(track => ({ ...track, points: defaultPoints }));
  }, [filteredTracks])


  useEffect(() => {
    const commonItems = albumFilteredTracks.filter(item => typeFilteredTracks.includes(item));
    console.log('commonItems',commonItems); 
    setFilteredTracks(commonItems);
  }, [typeFilteredTracks, albumFilteredTracks])


  return (
    <>
      <div className="quiz-reload-btn-container">
        <ReloadButton
          removeLatestFromLocalStorage={removeLatestFromLocalStorage}
        />
      </div>
      {started ? (
        <></>) : (<>
        <div className="filters-container">
        <p >Filters</p>
          <FilterTypes
            inputTracks={allTracks}
            setTypeFilteredTracks={setTypeFilteredTracks}
          />

          <FilterAlbums
            inputTracks={allTracks}
            setAlbumFilteredTracks={setAlbumFilteredTracks}
          />
        </div>
        

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
