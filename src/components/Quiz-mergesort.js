import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { splitIntoPairs, getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";

const Quiz = ({ tracks, setRankedTracks, rankedTracks, setTracksToSort }) => {

    const [localRankedTracks, setLocalRankedTracks] = useState([...rankedTracks]);

    console.log(localRankedTracks.length / 2);
    //  console.log('rankedTracks', rankedTracks.length);
    //  console.log('localRankedTracks', localRankedTracks.length);
    const [randomPivotIndex, setRandomPivotIndex] = useState();
    const [pivot, setPivot] = useState();
    const [likeMore, setLikeMore] = useState([]);
    const [likeLess, setLikeLess] = useState([]);

    // IF LIKEMORE OR LIKELESS IS DIVERGING TOO MUCH IN TERMS OF SIZE, THEN THE PIVOT WAS POORLY CHOSEN! RANKS THE PIVOT WHERE IT SHOULD BE AND GET A NEW PIVOT ADD it to the one with hte least songs, be that the top or bottom. 
    const [remainingTracks, setRemainingTracks] = useState([...rankedTracks]);

    //  const dispatch = useDispatch();
    // const preferenceSortedTracks = useSelector(state => state.preferenceSorted);
    // const [orderOption, setOrderOption] = useState('eraOrderOption')
    // const [sorting, setSorting] = useState("preference")

    const [trackPair, setTrackPair] = useState([]);

    const [track1, setTrack1] = useState(null);
    const [track2, setTrack2] = useState(null);
    const [pairs, setPairs] = useState(splitIntoPairs(localRankedTracks, remainingTracks));
    console.log(pairs[0].length);
    // const updateTrackPoints = (trackId, points) => {
    //     dispatch(updatePreferencePoints({ trackId, points }));
    // };



    // const pairs = splitIntoPairs(localRankedTracks, remainingTracks);

    // console.log(pairs.length)
    // console.log(pairs.map(pair => console.log(pair)))

    // -------------------------------------- SORTING LOGIC --------------------------------------
    const initializeSorting = () => {

    };




    // -------------------------------------- HANDLE CLICK LOGIC --------------------------------------

    const handlePreference = (preferredTrack, lessPreferredTrack) => {
        
    };



    // initialize sorting on component mounting
    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * tracks.length);
        setRandomPivotIndex(randomIndex);
        setPivot(tracks[randomIndex]);
initializeSorting();
    }, []);




    // if filters get changes, this will reset the sort
    useEffect(() => {
        setRemainingTracks(tracks);
        setLocalRankedTracks(rankedTracks)
    }, [tracks])

    // when a track gets sorted, update states. 
    useEffect(() => {
        // setRankedTracks(localRankedTracks);
        setTracksToSort(remainingTracks);
    }, [remainingTracks])

    useEffect(() => {
        setRankedTracks(localRankedTracks);
    }, [localRankedTracks])

    return (
        <>

            <div className="quiz-container" >

                {pairs.map(pair => {
                    if (pair.length >= 2) {
                        return (
                            <>
                                <div className="quiz-options-container">
                                    <QuizSongOption
                                        track={pair[0].track}
                                        onClick={() => handlePreference(pair[0].track, pair[1].track)}
                                    />
                                    <QuizSongOption
                                        track={pair[1].track}
                                        onClick={() => handlePreference(pair[1].track, pair[0].track)}
                                    />
                                </div>
                            </>

                        )
                    }

                })}



                {trackPair.length === 1 && (
                    <p>Only one track left. Last choice!</p>
                )}
                {trackPair.length === 0 && (
                    <p>All tracks have been sorted. </p>
                )}
            </div>

            {/* <Condensed tracks={localRankedTracks} sortType='preference' />
            <FullSizeAllTracks tracks={localRankedTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} /> */}


        </>

    );
};
export default Quiz;


