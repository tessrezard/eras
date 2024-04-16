import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";
import { useDispatch, useSelector } from 'react-redux';
import Legend from "../components/Legend";

const NotesPage = () => {

  const reverseTracks = reverseEraOrder(allTracks);
  const filters = ["remix", "live", "acoustic"];
  const filtered = filterTracks(reverseTracks, filters);


  return (  
    <>
    <div className="home-quiz-preamble">
    <h1>Notes    </h1>

      <p>How does the quiz work?</p>
      <p>To start, the quiz randomly puts into pairs all of the songs you can sort. You can filter the songs to choose which tracks will be included in this initial pairing up. </p>
      <br/>
      <p>PHASE 1:</p>
      <p>The first thing you need to do is to choose which song of a pair is your favorite.</p>
      <p> In this first step, you can choose as many pairs as you would like to sort, and your can also toggle between your choices if you change your mind.</p>
     
      <p>PHASE 2:</p>
      <p>Once you get into the second phase of the quiz, you can no longer undo a choice, so think carefully about which song to choose. </p>
      
      <p>NOTES:</p>
      <p> This quiz can be very long it you want sort all the tracks!</p>
      <p> Do not refresh the page, or you will loose you progress and have to start again!</p>
    </div>
        </>
  );
};


export default NotesPage;
