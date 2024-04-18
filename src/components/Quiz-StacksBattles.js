import React, { useState, useEffect } from "react";
import '../styles/CSS/main.css';
import QuizSongOption from "./QuizSongOption";
import QuizStackedOption from "./QuizStackedOption";
import QuizSortedItem from "./QuizSortedItem";
import UndoButton from "./Quiz-UndoButton";


const StacksBattles = ({ step, piece, index, updateAddUpSortedPieces, addUpSortedPieces, setAddUpSortedPieces }) => {


    let pieceCopy = [...piece]; // --we will work from a copy of piece to fortify against issues of mutation
    const [sortedPiece, setSortedPiece] = useState([]); // list of chosen favorites, used to render sorted list and to update addUpSortedPieces 
    const groupA = 0; // --named for more readable code : left hand pile
    const groupB = 1; // --named for more readable code : right hand pile

    let indexA = 0;
    let indexB = 0;

    const [indexTrackA, setIndexTrackA] = useState(0);
    const [indexTrackB, setIndexTrackB] = useState(0);


    const [trackA, setTrackA] = useState(pieceCopy[groupA][0].track);
    const [trackB, setTrackB] = useState(pieceCopy[groupB][0].track);

    const [lastElementA, setLastElementA] = useState(false);
    const [lastElementB, setLastElementB] = useState(false);

    useEffect(() => {
        // --if new step, reset these values to sort again
        setIndexTrackA(0);
        setIndexTrackB(0);
        setSortedPiece([])
        setLastElementA(false);
        setLastElementB(false);
    }, [step])


    // --figure out how many elements in the piece ( to know when they have all been sorted. )
    let totalElements = 0;
    piece.forEach(innerArray => {
        totalElements += innerArray.length;
    });


    const handleClick = (item, group) => {
        let updatePiece = [...sortedPiece];
        const alreadySorted = sortedPiece.findIndex((track) => track.eraIndex === item.eraIndex)
        // --if track is in sortedPiece, alreadySorted will be the index at which the pair already is. 
        // --if track is new, alreadySorted will be -1
        if (alreadySorted === -1) {
            updatePiece.push(item);
            setSortedPiece(updatePiece)
        }
        switch (group) {
            case 'A':
                if (pieceCopy[groupA].length > indexTrackA + 1) {
                    setIndexTrackA(indexTrackA + 1);
                    indexA++;
                    setTrackA(pieceCopy[groupA][indexA].track);
                } else {
                    setLastElementA(true);
                }

                break;
            case 'B':
                if (pieceCopy[groupB].length > indexTrackB + 1) {
                    setIndexTrackB(indexTrackB + 1);
                    indexB++;
                    setTrackB(pieceCopy[groupB][indexB].track);
                } else {
                    setLastElementB(true);
                }
                break;
            default:
                break;
        }

    }


    useEffect(() => {
        // --if last element on stack added, automatically add the other stack in its current order
        if (lastElementA && !lastElementB) {
            const toAutoAdd = pieceCopy[groupB].slice(indexTrackB, pieceCopy[groupB].length);
            const autoAddUp = [...sortedPiece, ...toAutoAdd];
            setSortedPiece(autoAddUp);
            setLastElementB(true);
        }
        if (lastElementB && !lastElementA) {
            const toAutoAdd = pieceCopy[groupA].slice(indexTrackA, pieceCopy[groupA].length);
            const autoAddUp = [...sortedPiece, ...toAutoAdd];
            setSortedPiece(autoAddUp);
            setLastElementA(true);
        }
    }, [lastElementA, lastElementB])



    useEffect(() => {
        if (sortedPiece.length == totalElements) {
            updateAddUpSortedPieces(sortedPiece);
        }
    }, [sortedPiece])


    const renderStackA = piece[0].map((track, index) => {
        if (index > indexTrackA) {
            return (
                <div key={index}>
                    <QuizStackedOption
                        track={track.track}
                        group='A'
                        index={index}
                        position={index - indexTrackA}
                    />
                </div>);
        }
        return null; // --Return null for elements beyond the stopIndex
    });


    const renderStackB = piece[1].map((track, index) => {
        if (index > indexTrackB) {
            return (
                <div key={index}>
                    <QuizStackedOption
                        track={track.track}
                        group='B'
                        index={index}
                        position={index - indexTrackB}
                    />
                </div>);
        }
        return null; //-- Return null for elements beyond the stopIndex
    });



    return (
        <>
            {/* <div> */}

            {lastElementA && lastElementB ? (<></>) : (
                <>
                    <div className="quiz-battle-container">

                        <p className="quiz-vs">vs</p>

                        <div className="quiz-both-stacks">

                            <div className="quiz-stack-group-container quiz-stack-group-A">
                                <div className="quiz-stack">
                                    {renderStackA}
                                </div>
                                {lastElementA ? (
                                    <></>) : (
                                    <>
                                        <button className="quiz-stack-current-song quiz-stack-current-song-A">
                                            <QuizSongOption
                                                track={pieceCopy[groupA][indexTrackA].track}
                                                onClick={() => handleClick(pieceCopy[groupA][indexTrackA], 'A', trackA)}
                                            />
                                        </button>
                                    </>)}
                            </div>

                            {/* <p className="quiz-vs">vs</p> */}

                            <div className="quiz-stack-group-container quiz-stack-group-B">
                                <div className="quiz-stack">
                                    {renderStackB}
                                </div>
                                {lastElementB ? (
                                    <></>) : (
                                    <>
                                        <button className="quiz-stack-current-song">
                                            <QuizSongOption
                                                track={pieceCopy[groupB][indexTrackB].track}
                                                onClick={() => handleClick(pieceCopy[groupB][indexTrackB], 'B', trackB)}
                                            />
                                        </button>
                                    </>)}
                            </div>

                        </div>
                    </div>

                </>)}
            {/* </div> */}

            <div>

                {/* {sortedPiece.map((item, index) => {
                        return (
                            <QuizSortedItem item={item} index={index} key={index} />
                        )
                    })} */}
                {sortedPiece.length ? (
                    <>
                        <div className="quiz-sorted-piece-list">
                            {sortedPiece.map((item, index) => {
                                return (
                                    <QuizSortedItem item={item} index={index} key={index} />
                                )
                            })}
                            <UndoButton
                                piece={piece}
                                sortedPiece={sortedPiece}
                                setSortedPiece={setSortedPiece}
                                setIndexTrackA={setIndexTrackA}
                                setIndexTrackB={setIndexTrackB}
                                setLastElementA={setLastElementA}
                                setLastElementB={setLastElementB}
                                addUpSortedPieces={addUpSortedPieces}
                                setAddUpSortedPieces={setAddUpSortedPieces}
                            />
                        </div>

                    </>) : (<></>)}
            </div>

        </>
    )
}


export default StacksBattles;


