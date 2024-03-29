import React, { useState, useEffect, useReducer } from "react";
import '../styles/CSS/main.css';
import InitialOptions from "./Quiz-InitialOptions";
import NextStep from "./Quiz-NextStep";
import { nextStepOfSorting } from "../app/utilities/nextStepOfSorting";
import { isEven, isOdd } from "../app/utilities/isEven";
import QuizSortedItem from "./QuizSortedItem";
import { scrollToTop } from "../app/utilities/scrollToTop";

const Quiz = ({ initialPairs }) => {

    const [rankedPairs, setRankedPairs] = useState([]); // in the initial step, this get updated as the user chooses and ranks pairs. 
    const [latestSortedTracks, setLatestSortedTracks] = useState([rankedPairs]); // this holds the latest sorted/ranked tracks. in the initial stage with single depth pairs, it updates every time a pair is added (this is because the user can choose as many pairs as they wish). In the further steps, this gets updated when moving to next step.
    const [addUpSortedPieces, setAddUpSortedPieces] = useState([]); // when we move past the initial pairs stage, we move into working with pieces (stacks). As these get sorted, they are added here, and when they are all sorted, will will update the latestSortedTracks with the added up pieces. 
    const [toSort, setToSort] = useState(true); // this state will hold the returned value of nextStepOfSorting. we take latestSortedTracks and pair up the pieces to be compared. 
    const [step, setStep] = useState(0); // this state is to track which step we are one , and if the step has changed. Passing it to components will allow them to reset for the next step.
    const [oddPair, setOddPair] = useState(true); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    const [oddPiece, setOddPiece] = useState(true); // this state holds the 'extra' or 'odd' piece which cannot be paired if latestsSortedTracks.length was an odd number. 
    const [message, setMessage] = useState();

    console.log('addUpSortedPieces', addUpSortedPieces);

    // function passed to initial stage to update rankedPairs & latestRankedTracks
    const updateRankedPairs = (updatedRankedPairs) => {
        setRankedPairs(updatedRankedPairs);
        setLatestSortedTracks(updatedRankedPairs);
    };

    // function passed to 'next' stage(s) to update addUpSortedPieces
    const updateLatestSortedTracks = (sortedPiece) => {
        setAddUpSortedPieces([...addUpSortedPieces, sortedPiece]);
    }

    const allowNextStep = (step) => {
        if (step === 0) {
            if (rankedPairs.length > 2) {
                return true;
            } else {
                setMessage('Please select at least 3');
                return false;
            }
        } else {
            if (addUpSortedPieces.length >= latestSortedTracks.length / 2) {
                return true;
            } else {
                setMessage('You need to sort all the stacks before moving on to the next step.');
                return false;

            }
        }

    }

    const handleNextStep = (step) => {
        console.log('step', step);
        console.log('allowNextStep', allowNextStep(step));


        if (allowNextStep(step)) {
            if (step == 0) {
                if (isOdd(rankedPairs)) {
                    // console.log('isOdd(rankedPairs)', isOdd(rankedPairs));
                    setOddPair(rankedPairs[rankedPairs.length - 1]);
                }
                setLatestSortedTracks(rankedPairs);
            } else {
                if (isOdd(addUpSortedPieces)) {
                    // console.log('isOdd(addUpSortedPieces)', isOdd(addUpSortedPieces));
                    if (!oddPiece.length) {
                        // console.log('set off piece with ', addUpSortedPieces[addUpSortedPieces.length - 1])
                        setOddPiece(addUpSortedPieces[addUpSortedPieces.length - 1]);
                    } else {
                        // console.log('oddPiece already set')
                    }

                }
            }
            setStep(prev => prev + 1);
            setMessage();
        }
        console.log('message', message);

    }



    // --------------- if step updated, 
    useEffect(() => {
        scrollToTop();

        if (isOdd(toSort)) {

            if (oddPair.length) {
                setAddUpSortedPieces([...addUpSortedPieces, oddPair]);
                setOddPair(true);


            }
        }
        //if user has sorted all of toSort
        if (addUpSortedPieces.length >= toSort.length) {
            setLatestSortedTracks(addUpSortedPieces);
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





    // Function to handle saving data to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('sorted-tracks', JSON.stringify(latestSortedTracks[0])); // 'myData' is the key used to store data in localStorage
    };

    // ALL SORTED
    if (rankedPairs.length > 2 && latestSortedTracks[0].length === rankedPairs.length * 2) {

        return (
            <>
                <div className="quiz-all-sorted">
                    <h3> You're all sorted ! </h3>
                    <button onClick={saveToLocalStorage}>Save to Local Storage</button>


                    {latestSortedTracks[0].map((item, index) => {
                        return (

                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })}
                </div>

            </>
        )
    }

    return (
        <>

            <div className="quiz-container" >
                {message ? (<><p className="quiz-message">{message}</p></>) : (<></>)}

                <button
                    className="quiz-next-button"
                    onClick={() => handleNextStep(step)}
                >Next Step ➸</button>
                {step === 0 ? (
                    <>
                    <div className="quiz-instructions">
                    <p>Choose your favorite song from a pair!</p>
                        <p >Select as many as you would like.</p>
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

{message ? (<><p className="quiz-message">{message}</p></>) : (<></>)}

                <button
                    className="quiz-next-button"
                    onClick={() => handleNextStep()}
                >Next Step ➸</button>



            </div>


        </>

    );
};
export default Quiz;



