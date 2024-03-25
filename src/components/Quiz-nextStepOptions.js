import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import QuizStackedOption from "./QuizStackedOption";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";
import { isAbsolute } from "path-browserify";
import QuizSortedItem from "./QuizSortedItem";


// 

const NextStep = ({ piece, index, updateLatestSortedTracks }) => {
    let pieceCopy = [...piece];
    const [sortedPiece, setSortedPiece] = useState([]);


    let groupA = 0;
    let groupB = 1;

    const [indexTrackA, setIndexTrackA] = useState(0);
    const [indexTrackB, setIndexTrackB] = useState(0);

    const [trackA, setTrackA] = useState(pieceCopy[groupA][indexTrackA].track);
    const [trackB, setTrackB] = useState(pieceCopy[groupB][indexTrackB].track);


    // figure out how many elements in the piece ( to know when they have all been sorted. )
    let totalElements = 0;
    piece.forEach(innerArray => {
        totalElements += innerArray.length;
    });

    useEffect(() => {
        setTrackA(pieceCopy[groupA][indexTrackA].track);
        setTrackB(pieceCopy[groupB][indexTrackB].track);
    }, [indexTrackA, indexTrackB])


    const handleClick = (item, group) => {
        let updatePiece = [...sortedPiece];

        const alreadySorted = sortedPiece.findIndex((track) => track.eraIndex === item.eraIndex)
        // if track is in sortedPiece, alreadySorted will be the index at which the pair already is. 
        // if track is new, alreadySorted will be -1
        if (alreadySorted === -1) {
            updatePiece.push(item);
            setSortedPiece(updatePiece)
        }

        switch (group) {
            case 'A':
                if (pieceCopy[groupA].length > indexTrackA + 1) {
                    setIndexTrackA(indexTrackA + 1);
                }
                break;
            case 'B':
                if (pieceCopy[groupB].length > indexTrackB + 1) {
                    setIndexTrackB(indexTrackB + 1);
                }
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        if (sortedPiece.length == totalElements) {
            updateLatestSortedTracks(sortedPiece);
        }
    }, [sortedPiece])

    const renderStackA = pieceCopy[groupA].map((track, index) => {
        if (index > indexTrackA) {
            return (
                <div key={index}>
                    <QuizStackedOption
                        track={track.track}
                        group='A'
                        index={index}
                        position={index - indexTrackA}
                    />
                </div>); // Display the number in JSX if index < stopIndex
        }
        return null; // Return null for elements beyond the stopIndex
    });

    const renderStackB = pieceCopy[groupB].map((track, index) => {
        if (index > indexTrackB) {
            return (
                <div key={index}>
                    <QuizStackedOption
                        track={track.track}
                        group='B'
                        index={index}
                        position={index - indexTrackB}
                    />
                </div>); // Display the number in JSX if index < stopIndex
        }
        return null; // Return null for elements beyond the stopIndex
    });

    return (
        <>
            <div className="quiz-options-container">

                <div className="quiz-both-stacks">

                    <div className="quiz-stack-group-container quiz-stack-group-A">
                        <div className="quiz-stack">
                            {renderStackA}
                        </div>
                        <button className="quiz-stack-current-song">
                            <QuizSongOption
                                track={trackA}
                                onClick={() => handleClick(pieceCopy[groupA][indexTrackA], 'A')}
                            />
                        </button>
                    </div>

                    <p>vs</p>

                    <div className="quiz-stack-group-container quiz-stack-group-B">
                        <div className="quiz-stack">
                            {renderStackB}
                        </div>

                        <button className="quiz-stack-current-song">
                            <QuizSongOption
                                track={trackB}
                                onClick={() => handleClick(pieceCopy[groupB][indexTrackB], 'B')}
                            /> 
                            </button>
                    </div>

                </div>

            </div>


<div className="quiz-sorted-piece-list">

            {sortedPiece.map((item, index) => {
                return (
                    <QuizSortedItem item={item} index={index}/>
                )
            })}
            </div>

        </>
    )
}


export default NextStep;


