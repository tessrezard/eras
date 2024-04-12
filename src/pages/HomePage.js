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

    <div>
      <p>It can be a long quiz!</p>
      <p> in the first step, you can choose as many pairs as you would like to sort. You can also toggle between your choices if you change your mind.</p>
      <p> past the first pairs step, you can no longer toggle. clicking you favorite is final, so make sure you're sure! you also have to complete all the stacks you have started</p>
      <p> dont refresh the page, or you will loose you progress and have to start again!</p>
    </div>
    </>
  );
};


export default HomePage;
