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
import { isEven } from "../app/utilities/isEven";

const Quiz = ({ initialPairs }) => {


    const [rankedPairs, setRankedPairs] = useState([]); // in the initial step, this get updated as the user chooses and ranks pairs. 
    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]); // this holds the latest sorted/ranked tracks. in the initial stage with single depth pairs, it updates every time a pair is added (this is because the user can choose as many pairs as they wish). In the further steps, this gets updated when moving to next step.
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]); // when we move past the initial pairs stage, we move into working with pieces (stacks). As these get sorted, they are added here, and when they are all sorted, will will update the latestSortedTracks with the added up pieces. 

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [toSort, setToSort] = useState(true); // this state will hold the returned value of nextStepOfSorting. we take latestSortedTracks and pair up the pieces to be compared. 

    const [step, setStep] = useState(0); // this state is to track which step we are one , and if the step has changed. Passing it to components will allow them to reset for the next step.
    const [oddPiece, setOddPiece] = useState(true); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 


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



    // --------------- if step updated, 
    useEffect(() => {
        console.log('--------NEXT STEP!!!!!!!!!!!!------------------')
        console.log(`addUpSortedPieces length is ${addUpSortedPieces.length}`);
        console.log(`toSort length is ${toSort.length}`);
        console.log(`(addUpSortedPieces.length === toSort.length) is ${(addUpSortedPieces.length === toSort.length )}`);


        // if (addUpSortedPieces.length === latestSortedTracks.length/2) {
        //     setLatestSortedTracks(addUpSortedPieces);
        //     setToSort(nextStepOfSorting(addUpSortedPieces)); // nextStepOfSorting will only add pairs 
        // }

        // if (!oddPiece.length){
        //     if (addUpSortedPieces.length === toSort.length) {
        //         setLatestSortedTracks(addUpSortedPieces);
        //         setToSort(nextStepOfSorting(addUpSortedPieces)); // nextStepOfSorting will only add pairs 
        //     }
        // } else {
        //     if (addUpSortedPieces.length === toSort.length + 1) {
        //         setLatestSortedTracks(addUpSortedPieces);
        //         setToSort(nextStepOfSorting(addUpSortedPieces)); // nextStepOfSorting will only add pairs 
        //     }
        // }

        if (addUpSortedPieces.length === toSort.length) {
            console.log('oddPiece.length', oddPiece.length)
            console.log('addUpSortedPieces.length', addUpSortedPieces.length)
            if (!isEven(addUpSortedPieces) && isEven(oddPiece)){
                console.log('odd odd odd odd odd oddddddd')
                const mergedOddPieces = [addUpSortedPieces.flat(), oddPiece];
                setLatestSortedTracks(mergedOddPieces);
                setToSort(nextStepOfSorting(mergedOddPieces))
                console.log('matchOddPiecesWithOddPiece', mergedOddPieces)
                setOddPiece([]);// This might not immediately reset oddPiece
            } else {
                setLatestSortedTracks(addUpSortedPieces);
                setToSort(nextStepOfSorting(addUpSortedPieces)); // nextStepOfSorting will only add pairs 
    
            }
        }
    }, [step])

    // Use useEffect to reset oddPiece

    useEffect(() => {
        if (!oddPiece.length) {
            setOddPiece([]);
        }
    }, [oddPiece]);

    // --------------- if step updated, 
    useEffect(() => {
        if (oddPiece.length) {
            console.log('we have an oddball!!', oddPiece)
        }

    }, [toSort])
    // ---------------if latestSortedTracks is even make into paired pieces to sort, else if is odd, slice last element and save it in oddPiece
    useEffect(() => {
        setToSort(nextStepOfSorting(latestSortedTracks));
        setAddUpSortedPieces([]);

        if (latestSortedTracks % 2 != 0 && step > 0) {
            console.log(`latestSortedTracks is odd`);
            setOddPiece(latestSortedTracks[latestSortedTracks.length - 1]);
            // setAddUpSortedPieces(prev => [...prev, oddPiece]);
        }


    }, [latestSortedTracks])







    console.log('addUpSortedPieces', addUpSortedPieces)
    console.log('toSort', toSort);
    console.log('--------------------------------------------------------------')
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



