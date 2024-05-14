
import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';


const SaveRanking = ({ finalSorted, graphTracks }) => {

    const [givenName, setGivenName] =  useState('');
    const [saved, setSaved] =  useState(false);

    const handleInputChange = (e) => {
        setGivenName(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (givenName){
            // const validName = givenName.replace(/\//g, '_');
        }
        setGivenName('');
        setSaved(true);
    };

    console.log('givenName', givenName)
    
    return (
        <>
            <div className="quiz-SaveRanking-container">
                {saved? (
                    <>
                    <h2>{givenName} Saved!</h2>
                    </>
                ) : (
                    <>
                    <h2>Save this ranking</h2>
                <div>
                    <form onSubmit={handleSubmit} className="quiz-SaveRanking-form">
                            <input 
                                id="namePlaylist" 
                                type="text" 
                                placeholpxder="Name this ranking..." 
                                value={givenName}
                                onChange={handleInputChange}
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