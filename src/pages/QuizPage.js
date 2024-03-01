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

const QuizPage = () => {

  const reverseTracks = reverseEraOrder(allTracks);
  const filters = ["remix", "live", "acoustic"];
  const filtered = filterTracks(reverseTracks, filters);


  return (  
    <>
    <Quiz tracks={reverseTracks}/>
    <div className="horizontal-chronology">
    {/* <Condensed tracks={filtered} sortType='duration'/> */}
    </div>
      {/* <VerticalChronology /> */}
    </>
  );
};


export default QuizPage;
