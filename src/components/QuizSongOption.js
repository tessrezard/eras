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
            <div className={`${albumBackgroundColor}`}>
                <h3 style={{color: '#fff'}}>{trackName}</h3>
                <button onClick={onClick}>Prefer this</button>
            </div>
        );
    }

};



export default QuizSongOption;
