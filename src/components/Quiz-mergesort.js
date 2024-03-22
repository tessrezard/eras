import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";
import InitialOptions from "./Quiz-InitialOptions";
import NextStep from "./Quiz-nextStepOptions";
import { nextStepOfSorting } from "../app/utilities/nextStepOfSorting";


const Quiz = ({ tracks, setRankedTracks, rankedTracks, setTracksToSort }) => {

    const [localRankedTracks, setLocalRankedTracks] = useState([...tracks]);
    const [remainingTracks, setRemainingTracks] = useState([...rankedTracks]);

    const [pairs, setPairs] = useState(splitIntoPairs(localRankedTracks, remainingTracks));
    const [rankedPairs, setRankedPairs] = useState([]);

    const [completedRankedPairs, setCompletedRankedPairs] = useState([]);


    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]);
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    let toSort = nextStepOfSorting(latestSortedTracks);
    // Function to update rankedPairs
    const updateRankedPairs = (updatedRankedPairs) => {
        setRankedPairs(updatedRankedPairs);
        setLatestSortedTracks(updatedRankedPairs)
    };

    const updateLatestSortedTracks = (sortedPiece) => {
        console.log('----------in update lastest tracks-------');
        setAddUpSortedPieces([...addUpSortedPieces, sortedPiece]);

        setLatestSortedTracks([...latestSortedTracks, sortedPiece]);
    }

    if (addUpSortedPieces.length == (latestSortedTracks.length - latestSortedTracks % 2)){
        setLatestSortedTracks(addUpSortedPieces);
        setAddUpSortedPieces([]);
    }

    // if filters get changes, this will reset the sort
    useEffect(() => {
        setRemainingTracks(tracks);
        setLocalRankedTracks(rankedTracks);
        setPairs(splitIntoPairs(tracks, remainingTracks))
    }, [tracks])

    useEffect(() => {
        setRankedTracks(rankedPairs);
    }, [rankedPairs])

    //not working? 
    if (rankedPairs.length >= (tracks.length / 2)) {
        setCompletedRankedPairs(rankedPairs);
    }

    const handleNextStep = () => {
        if (step2) { }
        if (step1) {
            setStep1(false);
            setStep2(true);
        }
    }

    console.log('latestSortedTracks', latestSortedTracks);
    console.log('addUpSortedPieces', addUpSortedPieces);
    console.log('addUpSortedPieces.length', addUpSortedPieces.length);

    useEffect(() => {
         toSort = nextStepOfSorting(latestSortedTracks)
            }, [latestSortedTracks])

    return (
        <>

            <div className="quiz-container" >
                <button onClick={() => handleNextStep()}>Next step</button>
                {step1 ? (
                    <>
                        <p>step 1</p>
                        {pairs.map((pair, index) => {
                            return (
                                <InitialOptions
                                    pair={pair}
                                    index={index}
                                    rankedPairs={rankedPairs}
                                    onUpdateRankedPairs={updateRankedPairs}
                                    key={index}
                                />
                            )
                        })}
                    </>
                ) : (<></>)}

                {step2 ? (
                    <>
                        <p>step 2</p>
                        {toSort.map((piece, index) => {
                            if (piece.length % 2 === 0) {
                                return (
                                    <>
                                        <NextStep
                                            piece={piece}
                                            index={index}
                                            key={index}
                                            updateLatestSortedTracks={updateLatestSortedTracks}
                                        />
                                    </>
                                )
                            }

                        })}
                    </>
                ) : (<></>)}




            </div>

            {/* <Condensed tracks={localRankedTracks} sortType='preference' />
            <FullSizeAllTracks tracks={localRankedTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} /> */}


        </>

    );
};
export default Quiz;


