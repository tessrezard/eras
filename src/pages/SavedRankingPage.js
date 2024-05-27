import React, { useState } from "react";
import '../styles/CSS/main.css';
import { Link } from "react-router-dom";
import DisplaySavedRankings from "../components/Saved-DisplaySavedRankings";

const SavedRankingPage = () => {



    return (
        <>
            <div className="">
                <DisplaySavedRankings />
            </div>
            <Link className="home-link-button" to={'/quiz'}>Take the Quiz Again</Link>


        </>
    );
};


export default SavedRankingPage;
