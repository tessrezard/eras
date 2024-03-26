import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";




const InitialOptions = ({ pair, rankedPairs, onUpdateRankedPairs }) => {
    const [activeIndex, setActiveIndex] = useState(2);
    let numRanked;

    const handleClick = (index) => {
        //-----FOR ACTIVE STYLING 
        if (activeIndex === index) {
            // If the same option with same choice is clicked again, do nothing
            return;
        }
        setActiveIndex(index);
        //-----

        //-----FOR UPDATING RANKING
        const updateRankedPairs = [...rankedPairs];
        const updatePair = [...pair];
        if (index === 1) {
            updatePair.reverse();
        }
        // const alreadySorted = rankedPairs.findIndex((rankedPair) => rankedPair[0].eraIndex === pair[index].eraIndex || rankedPair[1].eraIndex === pair[index].eraIndex)
        const alreadySorted = updateRankedPairs.findIndex((rankedPair) => rankedPair[0].eraIndex === pair[index].eraIndex || rankedPair[1].eraIndex === pair[index].eraIndex)
        // if pair is in rankedPairs, alreadySorted will be the index at which the pair already is. 
        // if pair is new, alreadySorted will be -1

        if (alreadySorted != -1) {
            // ie: IF PAIR ALREADY SORTED
            // replace with new pair. 
            updateRankedPairs[alreadySorted] = updatePair;
        } else {
            numRanked = updateRankedPairs.push(updatePair);
            onUpdateRankedPairs(updateRankedPairs)
        }
        //-----
    }


    useEffect(() => {
        // This will be called every time rankedPairs changes
        // console.log(rankedPairs.length, "Ranked pairs updated:", rankedPairs);
    }, [rankedPairs]);

    if (pair.length >= 2) {
        return (
            <>
                <div className="quiz-options-container">
                    <QuizSongOption
                        track={pair[0].track}
                        onClick={() => handleClick(0)}
                        isActive={activeIndex === 0}
                    />
                    <p>vs</p>
                    <QuizSongOption
                        track={pair[1].track}
                        onClick={() => handleClick(1)}
                        isActive={activeIndex === 1}
                    />

                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="quiz-options-container">
                    <QuizSongOption
                        track={pair[0].track}
                        onClick={() => handleClick(0)}
                        isActive={activeIndex === 0}
                    />
                </div>
            </>
        )
    }
}


export default InitialOptions;


