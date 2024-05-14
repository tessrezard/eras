
import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';


const SaveRanking = ({ finalSorted, graphTracks }) => {

    const [givenName, setGivenName] =  useState('');
    const [saved, setSaved] =  useState(false);


      // Function to handle saving data to localStorage
  const saveFinalRankingToLocalStorage = (givenName, finalSorted, graphTracks) => {
    const nameString = JSON.stringify(givenName);
    const finalRankingName = givenName + '-ranking';
    const graphTracksName = givenName + '-graphTracks';

    const tracksString = JSON.stringify(finalSorted);
    const graphTracksString = JSON.stringify(graphTracks);

    localStorage.setItem(finalRankingName, tracksString);
    localStorage.setItem(graphTracksName, graphTracksString);

  };

    const handleInputChange = (e) => {
        setGivenName(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (givenName){
            // const validName = givenName.replace(/\//g, '_');
        }
        saveFinalRankingToLocalStorage(givenName, finalSorted, graphTracks);
        setGivenName('');
        setSaved(true);
    };

    console.log('givenName', givenName)
    
    return (
        <>
            <div className="quiz-SaveRanking-container">
                {saved? (
                    <>
                    <h2 className="quiz-SaveRanking-saved-message">{givenName} Saved!</h2>
                    </>
                ) : (
                    <>
                    <h2>Save this ranking</h2>
                <div>
                    <form onSubmit={handleSubmit} className="quiz-SaveRanking-form">
                            <input 
                                id="namePlaylist" 
                                type="text" 
                                placeholder="Name this ranking..." 
                                value={givenName}
                                onChange={handleInputChange}
                                required
                                />
                            <button type="submit" className="quiz-SaveRanking-btn">
                                <p>Save</p>
                                </button>
                    </form>
                </div>
                    </>
             )}
                
            </div>

        </>
    )
}


export default SaveRanking;

;