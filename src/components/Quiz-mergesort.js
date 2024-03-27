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
import { isEven, isOdd } from "../app/utilities/isEven";

const Quiz = ({ initialPairs }) => {


    const [rankedPairs, setRankedPairs] = useState([]); // in the initial step, this get updated as the user chooses and ranks pairs. 
    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]); // this holds the latest sorted/ranked tracks. in the initial stage with single depth pairs, it updates every time a pair is added (this is because the user can choose as many pairs as they wish). In the further steps, this gets updated when moving to next step.
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]); // when we move past the initial pairs stage, we move into working with pieces (stacks). As these get sorted, they are added here, and when they are all sorted, will will update the latestSortedTracks with the added up pieces. 
  
    const [toSort, setToSort] = useState(true); // this state will hold the returned value of nextStepOfSorting. we take latestSortedTracks and pair up the pieces to be compared. 

    const [step, setStep] = useState(0); // this state is to track which step we are one , and if the step has changed. Passing it to components will allow them to reset for the next step.
    
    const [oddPair, setOddPair] = useState(true); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    
    const [oddPiece, setOddPiece] = useState(true); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    const [oddPieceGotUpdated, setOddPieceGotUpdated] = useState(0); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 


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
        console.log('addUpSortedPieces', addUpSortedPieces)
        if (step == 0) {
            if (isOdd(rankedPairs)){
                console.log('isOdd(rankedPairs)', isOdd(rankedPairs));
                setOddPair(rankedPairs[rankedPairs.length - 1]);
            }
            setLatestSortedTracks(rankedPairs);
        } else {
            if (isOdd(addUpSortedPieces)){
                console.log('isOdd(addUpSortedPieces)', isOdd(addUpSortedPieces));
                if (!oddPiece.length){
                    console.log('set off piece with ', addUpSortedPieces[addUpSortedPieces - 1])
                    setOddPiece(addUpSortedPieces[addUpSortedPieces - 1]);
                } else {
                    console.log('oddPiece already set')
                }

            }
        }
        setStep(prev => prev + 1);
    }






    useEffect(() => {
        console.log('latestSortedTracks', latestSortedTracks);

       
        setToSort(nextStepOfSorting(latestSortedTracks));

        
        setAddUpSortedPieces([]);

        
        // if (latestSortedTracks % 2 != 0 && step > 0) {
        //     // console.log(`latestSortedTracks is odd`);
        //     setOddPiece(latestSortedTracks[latestSortedTracks.length - 1]);
        //     // setAddUpSortedPieces(prev => [...prev, oddPiece]);
        // }
    }, [latestSortedTracks])



    // --------------- if step updated, 
    useEffect(() => {

        console.log('--------NEXT STEP!!!!!!!!!!!!------------------')
        console.log(`addUpSortedPieces length is ${addUpSortedPieces.length}`);
        console.log(`toSort length is ${toSort.length}`);
        console.log(`(addUpSortedPieces.length === toSort.length) is ${(addUpSortedPieces.length === toSort.length )}`);
        console.log(` the odd pair is : `, oddPair);
        //if user has sorted all of toSort
        if (isOdd(toSort)){
            if (oddPair.length){
                setAddUpSortedPieces([...addUpSortedPieces, oddPair]);
                setOddPair([]);
            }
            if (oddPiece.length){
                setAddUpSortedPieces([...addUpSortedPieces, oddPiece]);
                setOddPiece([]);
            }
            if (addUpSortedPieces.length === (toSort.length + 1)) {
                setLatestSortedTracks(addUpSortedPieces);
            }
        }

        if (isEven(toSort)){
            if (addUpSortedPieces.length === toSort.length) {

            
                // if (oddPair.length && isOdd(addUpSortedPieces)){
                //     const mergePiecesAndOddPair = [...addUpSortedPieces, oddPair];
                //     console.log('mergePiecesAndOddPair', mergePiecesAndOddPair);
                //     setAddUpSortedPieces(mergePiecesAndOddPair);
                // } 
    
                // if (isOdd(toSort)){
                //     console.log(`addUpSortedPieces is odd, ${addUpSortedPieces.length}`)
                //     setOddPiece(latestSortedTracks[addUpSortedPieces.length - 1]);
                // }
               
                // if (toSort.length === 1 && oddPiece.length){
                //     console.log('oddPiece: ', oddPiece)
                //     const mergedOddPieces = [addUpSortedPieces.flat(), oddPiece];
                //     setLatestSortedTracks(mergedOddPieces);
                //     console.log('matchOddPiecesWithOddPiece', mergedOddPieces)
                //     setOddPiece([]);// This might not immediately reset oddPiece
                //     setOddPieceGotUpdated(oddPieceGotUpdated + 1);
                // } else {
                //     setLatestSortedTracks(addUpSortedPieces);
                // }
                setLatestSortedTracks(addUpSortedPieces);
    
            }
        }
       


    }, [step])

    // Use useEffect to reset oddPiece

    // useEffect(() => {

    //     if (!oddPiece.length) {
    //         setOddPiece([]);
    //         console.log('reset oddPiece')

    //     }
    // }, [oddPieceGotUpdated]);



    useEffect(() => {

        if (oddPiece.length) {
            // console.log('we have an oddball!!', oddPiece)
        }
    }, [toSort])
    


   


    
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



