import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";


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


    // const pieceAlreadySorted =  piece.length % 2 === 1;
    // console.log('pieceAlreadySorted', pieceAlreadySorted );

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
                console.log(indexTrackB);
                if (pieceCopy[groupB].length > indexTrackB + 1) {
                    setIndexTrackB(indexTrackB + 1);
                }
                break;
            default:
                break;
        }
        
    }

    useEffect(() => {
        if (sortedPiece.length == totalElements){
            updateLatestSortedTracks(sortedPiece);
        }
    }, [sortedPiece])



    return (
        <>
            <div className="quiz-options-container">
                <QuizSongOption
                    track={trackA}
                    onClick={() => handleClick(pieceCopy[groupA][indexTrackA], 'A')}
                />

                <p>vs</p>

                <QuizSongOption
                    track={trackB}
                    onClick={() => handleClick(pieceCopy[groupB][indexTrackB], 'B')}
                />
            </div>


            {sortedPiece.map((item, index) => {
                return (
                    <p>{index + 1} : {item.track.name}</p>
                )
            })}
        </>
    )
}


export default NextStep;


