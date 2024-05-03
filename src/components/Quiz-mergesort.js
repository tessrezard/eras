import React, { useState, useEffect, useRef } from "react";
import '../styles/CSS/main.css';
import InitialOptions from "./Quiz-InitialOptions";
import StacksBattles from "./Quiz-StacksBattles";
import { nextStepOfSorting } from "../app/utilities/nextStepOfSorting";
import { isEven, isOdd } from "../app/utilities/isEven";
import { scrollToTop } from "../app/utilities/scrollToTop";
import QuizFinished from "./Quiz-Finished";
import { determineNumSteps } from "../app/utilities/determineNumberOfSteps";


const Quiz = ({ initialPairs, setStarted, saveLatestToLocalStorage, saveOddPairToLocalStorage, saveOddPieceToLocalStorage, step, setStep }) => {

    const [rankedPairs, setRankedPairs] = useState([]); // --in the initial step, this get updated as the user chooses and ranks pairs. 
    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]); // --this holds the latest sorted/ranked tracks. in the initial stage with single depth pairs, it updates every time a pair is added (this is because the user can choose as many pairs as they wish). In the further steps, this gets updated when moving to next step.
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]); // --when we move past the initial pairs stage, we move into working with pieces (stacks). As these get sorted, they are added here, and when they are all sorted, will will update the latestSortedTracks with the added up pieces. 
    const [toSort, setToSort] = useState(true); // --this state will hold the returned value of nextStepOfSorting. we take latestSortedTracks and pair up the pieces to be compared. 
    const [oddPair, setOddPair] = useState(true); // --this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    const [oddPiece, setOddPiece] = useState(true); // --this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    const [message, setMessage] = useState();

    const quizTop = useRef(null);


    const expectedSteps = determineNumSteps(rankedPairs.length, step);
    const displayStep = step + 1;


    //    // Function to handle saving data to localStorage
    //    const saveLatestToLocalStorage = (tracks) => {
    //     localStorage.setItem('latest-sorted-tracks', JSON.stringify(tracks)); 
    // };

    // --function passed to initial stage to update rankedPairs & latestRankedTracks
    const updateRankedPairs = (updatedRankedPairs) => {
        setRankedPairs(updatedRankedPairs);
        setLatestSortedTracks(updatedRankedPairs);
        setStarted(true)
    };

    // --function passed to 'next' stage(s) to update addUpSortedPieces
    const updateAddUpSortedPieces = (sortedPiece) => {
        setAddUpSortedPieces([...addUpSortedPieces, sortedPiece]);
    }

    // Function to handle saving data to localStorage
    const scrollToTop = () => {
        quizTop.current.scrollIntoView({ behavior: 'smooth' });
    };


    const allowNextStep = (step) => {
        if (step == 0) {
            if (rankedPairs.length > 2) {
                return true;
            } else {
                setMessage('Please select at least 3');
                return false;
            }
        } else {

            if (oddPair.length) {
                if (addUpSortedPieces.length + 1 >= latestSortedTracks.length / 2) {
                    return true;
                }
            } else if (addUpSortedPieces.length >= latestSortedTracks.length / 2) {
                return true;
            } else {
                setMessage('You need to sort all the stacks before moving on to the next step.');
                return false;
            }
        }

    }


    const handleNextStep = (step) => {
        scrollToTop()
        if (allowNextStep(step)) {
            if (step == 0) {
                if (isOdd(rankedPairs)) {
                    setOddPair(rankedPairs[rankedPairs.length - 1]);
                    saveOddPairToLocalStorage(rankedPairs[rankedPairs.length - 1])
                }
                setLatestSortedTracks(rankedPairs);
                saveLatestToLocalStorage(rankedPairs);
            } else {
                if (isOdd(addUpSortedPieces)) {
                    // console.log('isOdd(addUpSortedPieces)', isOdd(addUpSortedPieces));
                    if (!oddPiece.length) {
                        setOddPiece(addUpSortedPieces[addUpSortedPieces.length - 1]);
                        saveOddPieceToLocalStorage(addUpSortedPieces[addUpSortedPieces.length - 1]);
                    } else {
                        // console.log('oddPiece already set')
                    }

                }
            }
            setStep(prev => prev + 1);
            setMessage();
        }

    }



    // --------------- if step updated, 
    useEffect(() => {
        // scrollToTop();

        if (isOdd(toSort)) {

            if (oddPair.length) {
                setAddUpSortedPieces([...addUpSortedPieces, oddPair]);
                setOddPair(true);


            }
        }
        // --if user has sorted all of toSort
        if (addUpSortedPieces.length >= toSort.length) {
            setLatestSortedTracks(addUpSortedPieces);
            saveLatestToLocalStorage(addUpSortedPieces);

        }


    }, [step])




    useEffect(() => {
        // console.log('addUpSortedPieces', addUpSortedPieces)
        setToSort(nextStepOfSorting(latestSortedTracks));
        setAddUpSortedPieces([]);
        if (oddPair.length) {
            setAddUpSortedPieces([oddPair]);
            setOddPair(true);
        }
        if (oddPiece.length) {
            setAddUpSortedPieces([oddPiece]);
            setOddPiece(true);
        }


    }, [latestSortedTracks])



    // --ALL SORTED
    if (latestSortedTracks?.length == 1 && rankedPairs?.length > 2) {
        // if (rankedPairs?.length > 2 && latestSortedTracks[0]?.length === rankedPairs?.length * 2) {

        return (
            <>
                <div className="quiz-container" >
                    <QuizFinished latestSortedTracks={latestSortedTracks} />
                </div>
            </>
        )
    }

    return (
        <>

            <div className="quiz-container" >
                {message ? (<><p className="quiz-message">{message}</p></>) : (<></>)}

                <button
                    ref={quizTop}
                    className="quiz-next-button"
                    onClick={() => handleNextStep(step)}
                >Next Step ➸</button>
                {step === 0 ? (
                    <>


                        <p className="quiz-step-counter"> STEP 1 </p>

                        <div className="quiz-instructions">
                            <p>Choose your favorite song from a pair! <br/> 
                            Select as many as you would like. <br/>
                            Select the filters before you start :)</p>
                        </div>

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
                        <p>STEP {displayStep} of {expectedSteps}</p>
                        {toSort ? (<>{toSort.map((piece, index) => {
                            if (piece.length = 2) {
                                return (
                                    <StacksBattles
                                        step={step}
                                        piece={piece}
                                        index={index}
                                        key={index}
                                        updateAddUpSortedPieces={updateAddUpSortedPieces}
                                        addUpSortedPieces={addUpSortedPieces}
                                        setAddUpSortedPieces={setAddUpSortedPieces}
                                    />
                                )
                            }
                        })}</>) : <></>}
                    </>
                ) : (<></>)}

                {message ? (<><p className="quiz-message">{message}</p></>) : (<></>)}


                <button
                    className="quiz-next-button"
                    onClick={() => handleNextStep(step)}
                >Next Step ➸</button>


            </div>


        </>

    );
};
export default Quiz;



