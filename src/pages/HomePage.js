import React, { useState } from "react";
import '../styles/CSS/main.css';
import { Link } from "react-router-dom";


const HomePage = () => {



  return (  
    <>
    <div className="welcome-container ">
      <h1>Welcome to the Eras Quiz!</h1>

    </div>
    <Link className="home-link-button" to={'/quiz'}>Take the Quiz</Link>

    <div className="home-quiz-preamble">
      <p>How does the quiz work?</p>
      <p>To get the most accurate ranking possible </p>
      <p>To start, the quiz randomly puts into pairs all of the songs you can sort. You can filter the songs to choose which tracks will be included in this initial pairing. </p>
      <p>PHASE 1:</p>
      <p>The first thing you need to do is to choose which song of a pair is your favorite.</p>
      <p> In this first step, you can choose as many pairs as you would like to sort, and your can also toggle between your choices if you change your mind.</p>
     
      <p>PHASE 2:</p>
      <p>Once you get into the second phase of the quiz, you will be sorting </p>
      <p> Do not refresh the page, or you will loose you progress and have to start again!</p>
    </div>
    </>
  );
};


export default HomePage;
