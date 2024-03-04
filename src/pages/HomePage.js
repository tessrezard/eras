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

    </>
  );
};


export default HomePage;
