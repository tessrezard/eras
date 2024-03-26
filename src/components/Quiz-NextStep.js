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

const NextStep = ({ step, piece, index, updateLatestSortedTracks }) => {


    let pieceCopy = [...piece]; // we will work from a copy of piece to fortify against issues of mutation
    const [sortedPiece, setSortedPiece] = useState([]); // list of chosen favorites, used to render sorted list and to update addUpSortedPieces 
    const groupA = 0; // named for more readable code : left hand pile
    const groupB = 1; // named for more readable code : right hand pile

    let indexA = 0;
    let indexB = 0;

    const [indexTrackA, setIndexTrackA] = useState(0);
    const [indexTrackB, setIndexTrackB] = useState(0);


    const [trackA, setTrackA] = useState(pieceCopy[groupA][0].track);
    const [trackB, setTrackB] = useState(pieceCopy[groupB][0].track);




    useEffect(() => {
        // if new step, reset these values to sort again
        setIndexTrackA(0);
        setIndexTrackB(0);
        setSortedPiece([])
    }, [step])

    // useEffect(() => {
    //     setTrackA(pieceCopy[groupA][indexTrackA].track);
    //     setTrackB(pieceCopy[groupB][indexTrackB].track);
    // }, [indexTrackA, indexTrackB])


    // figure out how many elements in the piece ( to know when they have all been sorted. )
    let totalElements = 0;
    piece.forEach(innerArray => {
        totalElements += innerArray.length;
    });


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
                    console.log(`index A is ${indexA}`)
                    indexA++;
                    setTrackA(pieceCopy[groupA][indexA].track);
                }
                break;
            case 'B':
                if (pieceCopy[groupB].length > indexTrackB + 1) {
                    setIndexTrackB(indexTrackB + 1);
                    console.log(`index B is ${indexB}`)
                    indexB++;
                    setTrackB(pieceCopy[groupB][indexB].track);
                    console.log('clicked group b', 'indexb', indexB)

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


    const renderStackA = piece[0].map((track, index) => {
        // console.log('inside renderStack A',track);
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

    const renderStackB = piece[1].map((track, index) => {
        // console.log('inside renderStack B',track);
        //     return (
        //         <div key={index}>
        //             <QuizStackedOption
        //                 track={track.track}
        //                 group='B'
        //                 index={index}
        //                 position={index - indexTrackB}
        //             />
        //         </div>); // Display the number in JSX if index < stopIndex
        // }
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
            <div >

                <div className="quiz-both-stacks">

                    <div className="quiz-stack-group-container quiz-stack-group-A">

                        <div className="quiz-stack">
                            {renderStackA}
                        </div>

                        <button className="quiz-stack-current-song">
                            <QuizSongOption
                                track={pieceCopy[groupA][indexTrackA].track}
                                onClick={() => handleClick(pieceCopy[groupA][indexTrackA], 'A', trackA)}
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
                                track={pieceCopy[groupB][indexTrackB].track}
                                onClick={() => handleClick(pieceCopy[groupB][indexTrackB], 'B', trackB)}
                            />
                        </button>
                    </div>

                </div>

            </div>


            <div className="quiz-sorted-piece-list">

                {sortedPiece.map((item, index) => {
                    return (
                        <QuizSortedItem item={item} index={index} key={index} />
                    )
                })}
            </div>

        </>
    )
}


export default NextStep;


