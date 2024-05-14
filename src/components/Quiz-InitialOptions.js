import React, { useState } from "react";
import '../styles/CSS/main.css';
import QuizSongOption from "./QuizSongOption";



const InitialOptions = ({ pair, rankedPairs, onUpdateRankedPairs }) => {
    const [activeIndex, setActiveIndex] = useState(2);
    let numRanked;

    const handleClick = (index) => {
        //-----FOR ACTIVE STYLING 
        if (activeIndex === index) {
            // --If the same option with same choice is clicked again, do nothing
            return;
        }
        setActiveIndex(index);

        //-----FOR UPDATING RANKING
        const updateRankedPairs = [...rankedPairs];
        let updatePair = [...pair];
        if (index === 1) {
            updatePair = [...updatePair.reverse()];
        }

        const alreadySorted = updateRankedPairs.findIndex((rankedPair) =>
            rankedPair[0].eraIndex === pair[index].eraIndex ||
            rankedPair[1]?.eraIndex === pair[index]?.eraIndex
        );
        // --if pair is in rankedPairs, alreadySorted will be the index at which the pair already is. 
        // --if pair is new, alreadySorted will be -1
        // --if you're on the last track and there is no rankedPair[1] then don't it wont break because of the '?'.

        if (alreadySorted != -1) {
            // --ie: IF PAIR ALREADY SORTED
            // --replace with new pair. 
            updateRankedPairs[alreadySorted] = updatePair;
        } else {
            numRanked = updateRankedPairs.push(updatePair);
        }
        onUpdateRankedPairs(updateRankedPairs)

    }


    if (pair.length >= 2) {
        return (
            <>
                {/* <div className="quiz-options-container"> */}
                <div className="quiz-battle-container">
                </div>

                    <p className="quiz-vs">vs</p>

                    <div className="quiz-both-stacks">
                        <div className="quiz-initial-pairing">

                            <QuizSongOption
                                track={pair[0].track}
                                onClick={() => handleClick(0)}
                                isActive={activeIndex === 0}
                            />

                            <QuizSongOption
                                track={pair[1].track}
                                onClick={() => handleClick(1)}
                                isActive={activeIndex === 1}
                            />
                        </div>
                    </div>

                {/* </div> */}
            </>
        )
    } else {
        return (
            <>
                <div>
                    <QuizSongOption
                        track={pair[0].track}
                        onClick={() => handleClick(0)}
                        isActive={activeIndex === 0}
                    />
                </div>
            </>
        )
    }
}


export default InitialOptions;


