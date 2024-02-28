import React, { useState } from "react";
import '../styles/CSS/main.css';


const QuizSongOption = ({ track, onClick }) => {
    if (!track) {
        return <></>
    } else {
        const trackName = track.name;
        let variant = track.trackVariant
        if (variant) {
            switch (variant) {
                case 'remix':
                    variant = 'single';
                    break;
                case 'live':
                    variant = 'single';
                    break;
                case 'live':
                    variant = 'single';
                    break;
                default:
                    variant = track.trackVariant;
            }
        }

        const albumBackgroundColor = 'background-color-' + track.era + '-' + variant;
        const albumColor = 'color-' + track.era;

        return (
            
            <div onClick={onClick} className={` quiz-option-container ${albumBackgroundColor}`} >
                <p className="quiz-song-name" style={{color: '#fff'}}>{trackName}</p>
            </div>
        );
    }

};



export default QuizSongOption;
