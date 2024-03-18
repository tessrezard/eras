import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { getRandomTrack } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";
import QuizContent from "./QuizContent";

const Quiz = ({ tracks, setRankedTracks, rankedTracks, setTracksToSort }) => {

    const [localRankedTracks, setLocalRankedTracks] = useState([...rankedTracks]);

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


    // const updateTrackPoints = (trackId, points) => {
    //     dispatch(updatePreferencePoints({ trackId, points }));
    // };


    // -------------------------------------- SORTING LOGIC --------------------------------------
    const initializeSorting = () => {

        //--------- INITIAL PAIRING ----------
        const callGetPair = getRandomTrack(remainingTracks, localRankedTracks, randomPivotIndex, pivot);
        const [updatedRemainingTracks, pivotTrack, randomTrack] = callGetPair;
        setTrackPair([pivotTrack, randomTrack]);
        setTrack1(pivotTrack.track);
        setTrack2(randomTrack.track);
        setRemainingTracks(updatedRemainingTracks);
    };




    // -------------------------------------- HANDLE CLICK LOGIC --------------------------------------

    const handlePreference = (preferredTrack, lessPreferredTrack) => {

        // UPDATE POINTS ACCORDING TO PREFERENCE
        // const addPoint = localRankedTracks[preferredTrack.eraIndex].points + 10;
        // const removePoint = localRankedTracks[lessPreferredTrack.eraIndex].points - 10;

        // console.log(addPoint,'addPoint' )
        // console.log(removePoint,'removePoint' )

        // setLocalRankedTracks(prev => {
        //     console.log('prev', prev);
        //     const updatedTracks = [...prev]; // Create a copy of the array
        //     updatedTracks[preferredTrack.eraIndex].points = addPoint; // Update preferredTrack points
        //     updatedTracks[lessPreferredTrack.eraIndex].points = removePoint; // Update lessPreferredTrack points
        //     return updatedTracks; // Return the updated array
        // });
    if (preferredTrack.track != pivot){
        setLikeMore(prev => [...prev, preferredTrack]);
    }
    if (preferredTrack.track === pivot){
        setLikeLess(prev => [...prev, lessPreferredTrack]);
    }

console.log('i like these more than the pivot: ', likeMore);
console.log('i like these LESS than the pivot:', likeLess)
        // GET NEW Track
        if (remainingTracks.length > 2) {
            const newRandomTrack = getRandomTrack(remainingTracks, localRankedTracks, randomPivotIndex, pivot);
            const [updatedRemainingTracks, pivotTrack, newTrack ] = newRandomTrack;
            setTrackPair([pivotTrack, newTrack]);
            setTrack2(newTrack.track);
            setTrack1(pivotTrack.track)
            setRemainingTracks(updatedRemainingTracks);
        }
        // console.log('localRankedTracks', localRankedTracks);

    };



    // initialize sorting on component mounting
    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * tracks.length);
        setRandomPivotIndex(randomIndex);
        setPivot(tracks[randomIndex]);
    
    }, []);

    useEffect(() => {
  

if (pivot) {
    initializeSorting();
}
    
    }, [pivot]);

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
                {trackPair.length === 2 && (
                    <>
                        <h2>Which song do you prefer?</h2>
                        <div className="quiz-options-container">
                            <QuizSongOption
                                track={track1}
                                onClick={() => handlePreference(trackPair[0], trackPair[1])}
                            />
                            <QuizSongOption
                                track={track2}
                                onClick={() => handlePreference(trackPair[1], trackPair[0])}
                            />
                        </div>

                    </>
                )}
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


