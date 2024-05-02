import React, { useState } from "react";
import '../styles/CSS/main.css';

const NotesPage = () => {

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
      <p> This quiz can be very long if you want sort all the tracks!</p>
      <p> Do not refresh the page, or you will loose you progress and have to start again!</p>
    </div>
        </>
  );
};


export default NotesPage;
