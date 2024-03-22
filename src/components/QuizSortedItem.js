import React, { useState } from "react";
import '../styles/CSS/main.css';



const QuizSortedItem = ({ item, index }) => {

    if (!item.track) {
        return <></>;
    }

    const trackName = item.track.name;
    let variant = item.track.trackVariant;
    if (variant) {
        switch (variant) {
            case 'remix':
            case 'live':
                variant = 'single';
                break;
            default:
                break;
        }
    }
    const albumBackgroundColor = 'background-color-' + item.track.era + '-' + variant;
    const albumColor = 'color-' + item.track.era;
    let albumActiveBorder = '';

    return (
        <div >
            <p className={`quiz-sorted-item ${albumColor}`} >
                {index + 1} : {item.track.name}
                </p>

        </div>
    );
};

export default QuizSortedItem;

