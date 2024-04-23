import React, { useState } from "react";
import '../styles/CSS/main.css';


const QuizStackedOption = ({ track, group, index, position }) => {

    // is it pile a or pile b 
    // --> is it positions left(A) or right(B) 

    // console.log(track, group, index, position)


    let offset = (3 * position);
    let fromBottom = (3 * position);
    let depth = (1 * position);
    
    let leftOrRight;



    switch (group) {
        case 'A':
            leftOrRight = 'right';
             offset= offset + -300;
            break;
        case 'B':
            leftOrRight = 'left';
            break;
        default:
            leftOrRight = 'left';
    }

    // how far back is it? 
    // index in piece
    // --> bottom: 10?20?30?
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
        let albumActiveBorder = '';


        return (
            <div
                style={{
                    position: 'absolute',
                    top: `${fromBottom}px`,
                    [leftOrRight]: `${offset}px`,
                    zIndex: `-${depth}`
                }}
                className={
                    `quiz-option-container 
                    quiz-stack-item-container`}
                    >
                <div className={` quiz-option ${albumBackgroundColor}`} >
                    <p className="quiz-song-name" style={{ color: '#fff' }}> {trackName}</p>
                </div>
            </div>

        );
    }

};



export default QuizStackedOption;
