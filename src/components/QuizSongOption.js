import React, { useState } from "react";
import '../styles/CSS/main.css';


const QuizSongOption = ({ track, onClick }) => {

    const [isActive, setIsActive] = useState(false);


    const handleClick = () => {
        setIsActive(true);
    };

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
            <div className={` quiz-option-container ${albumBackgroundColor} ${isActive ? 'activeSongOption' : ''}`}>

            <div onClick={onClick} className={` quiz-option ${albumBackgroundColor} ${isActive ? 'activeSongOption' : ''}`} >
                <p className="quiz-song-name" style={{color: '#fff'}}>{trackName}</p>
            </div>
            </div>

        );
    }

};



export default QuizSongOption;
