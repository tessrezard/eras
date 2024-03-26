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
import NextStep from "./Quiz-NextStep";
import { nextStepOfSorting } from "../app/utilities/nextStepOfSorting";


const Quiz = ({ initialPairs }) => {


    const [rankedPairs, setRankedPairs] = useState([]); // in the initial step, this get updated as the user chooses and ranks pairs. 
    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]); // this holds the latest sorted/ranked tracks. in the initial stage with single depth pairs, it updates every time a pair is added (this is because the user can choose as many pairs as they wish). In the further steps, this gets updated when moving to next step.
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]); // when we move past the initial pairs stage, we move into working with pieces (stacks). As these get sorted, they are added here, and when they are all sorted, will will update the latestSortedTracks with the added up pieces. 

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [toSort, setToSort] = useState(true); // this state will hold the returned value of nextStepOfSorting. we take latestSortedTracks and pair up the pieces to be compared. 

    const [step, setStep] = useState(0); // this state is to track which step we are one , and if the step has changed. Passing it to components will allow them to reset for the next step.
    const [oddPiece, setOddPiece] = useState(); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 


    // function passed to initial stage to update rankedPairs & latestRankedTracks
    const updateRankedPairs = (updatedRankedPairs) => {
        setRankedPairs(updatedRankedPairs);
        setLatestSortedTracks(updatedRankedPairs);
    };

    // function passed to 'next' stage(s) to update addUpSortedPieces
    const updateLatestSortedTracks = (sortedPiece) => {
        setAddUpSortedPieces([...addUpSortedPieces, sortedPiece]);
    }


    const handleNextStep = (step) => {
        if (step == 0) {
            setLatestSortedTracks(rankedPairs);
        }
        setStep(prev => prev + 1);
    }

    // if (latestSortedTracks % 2 != 0 && step > 0){
    //     setOddPiece(latestSortedTracks[latestSortedTracks.length - 1]);
    //     setLatestSortedTracks(latestSortedTracks.slice(0, -1));
    // }

    // ---------------if latestSortedTracks is even make into paired pieces to sort, else if is odd, slice last element and save it in oddPiece
    useEffect(() => {
        console.log('latestSortedTracks', latestSortedTracks)
        if (latestSortedTracks.length % 2 === 0) {
            setToSort(nextStepOfSorting(latestSortedTracks));
        } else {
            // setToSort(nextStepOfSorting(latestSortedTracks.slice(0, -1)));
            // setOddPiece(latestSortedTracks[latestSortedTracks.length - 1]);
        }
    }, [latestSortedTracks])



    // --------------- if step updated, 
    useEffect(() => {
        if (addUpSortedPieces.length === latestSortedTracks.length / 2) {
            setLatestSortedTracks(addUpSortedPieces);
            setAddUpSortedPieces([]);
        }

    }, [step])



    console.log('addUpSortedPieces', addUpSortedPieces)

    return (
        <>

            <div className="quiz-container" >
                <button
                    className="quiz-next-button"
                    onClick={() => handleNextStep(step)}
                >Next Step ➸</button>
                {step === 0 ? (
                    <>
                        {initialPairs.map((pair, index) => {
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

                {step > 0 ? (
                    <>
                        {toSort ? (<>{toSort.map((piece, index) => {
                            if (piece.length = 2) {
                                return (
                                    <NextStep
                                        step={step}
                                        piece={piece}
                                        index={index}
                                        key={index}
                                        updateLatestSortedTracks={updateLatestSortedTracks}
                                    />
                                )
                            }
                        })}</>) : <></>}
                    </>
                ) : (<></>)}

                <button
                    className="quiz-next-button"
                    onClick={() => handleNextStep()}
                    >Next Step ➸</button>



            </div>


        </>

    );
};
export default Quiz;



