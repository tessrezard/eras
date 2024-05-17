
import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import { getItemsStartingWith } from "../app/utilities/getItemsStartingWith-fromLocalStorage";
import { updateGraphTracks } from "../app/utilities/updateGraphTracks";

const SaveRanking = ({ finalSorted, graphTracks, rankingSaved, setRankingSaved}) => {

    const [givenName, setGivenName] =  useState('');
    const [saved, setSaved] =  useState(false);

 
    


      // Function to handle saving data to localStorage
    const saveFinalRankingToLocalStorage = (givenName, finalSorted) => {
    const nameString = JSON.stringify(givenName);
    const currentTime = Date.now();
    const finalRankingName = 'savedRanking-' + givenName + `-${currentTime}`;
    const tracksString = JSON.stringify(finalSorted);
    localStorage.setItem(finalRankingName, tracksString);
  };

    const handleInputChange = (e) => {
        setGivenName(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (givenName){
            // check if is Valid name: IE : 
            // does name it already exist?
            // does ti contain bad chars or destructive combo?
            // const validName = givenName.replace(/\//g, '_');
        }
        saveFinalRankingToLocalStorage(givenName, finalSorted);
        setGivenName('');
        setRankingSaved(true);
    };

    
    return (
        <>
            <div className="quiz-SaveRanking-container">
                {rankingSaved? (
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