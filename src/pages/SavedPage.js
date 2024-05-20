import React, { useState } from "react";
import '../styles/CSS/main.css';
import { Link } from "react-router-dom";
import DisplaySavedRankings from "../components/Saved-DisplaySavedRankings";

const SavedPage = () => {



    return (
        <>
            <div className="">
                <h1>Your saved rankings</h1>
                <DisplaySavedRankings />
            </div>
            <Link className="home-link-button" to={'/quiz'}>Take the Quiz Again</Link>


        </>
    );
};


export default SavedPage;
