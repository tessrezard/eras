import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { getPair } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";



const Quiz = ({ tracks, setRankedTracks, rankedTracks, setTracksToSort }) => {
    
     const [localRankedTracks, setLocalRankedTracks] = useState([...rankedTracks]);

    //  console.log('rankedTracks', rankedTracks.length);
    //  console.log('localRankedTracks', localRankedTracks.length);

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
        const callGetPair = getPair(remainingTracks, localRankedTracks);
        const [updatedRemainingTracks, pairTrack1, pairTrack2] = callGetPair;
        setTrackPair([pairTrack1, pairTrack2]);
        setTrack1(pairTrack1.track);
        setTrack2(pairTrack2.track);
        setRemainingTracks(updatedRemainingTracks);
    };




    // -------------------------------------- HANDLE CLICK LOGIC --------------------------------------

    const handlePreference = (preferredTrack, lessPreferredTrack) => {

        // UPDATE POINTS ACCORDING TO PREFERENCE
        const addPoint = localRankedTracks[preferredTrack.eraIndex].points + 10;
        const removePoint = localRankedTracks[lessPreferredTrack.eraIndex].points - 10;

        // console.log(addPoint,'addPoint' )
        // console.log(removePoint,'removePoint' )

        setLocalRankedTracks(prev => {
            console.log('prev', prev);
            const updatedTracks = [...prev]; // Create a copy of the array
            updatedTracks[preferredTrack.eraIndex].points = addPoint; // Update preferredTrack points
            updatedTracks[lessPreferredTrack.eraIndex].points = removePoint; // Update lessPreferredTrack points
            return updatedTracks; // Return the updated array
        });
        
        // GET NEW PAIR
         if (remainingTracks.length > 2) {
            const callGetNewPair = getPair(remainingTracks, localRankedTracks);
            const [updatedRemainingTracks, newPairTrack1, newPairTrack2] = callGetNewPair;
            setTrackPair([newPairTrack1, newPairTrack2]);
            setTrack1(newPairTrack1.track);
            setTrack2(newPairTrack2.track);
            setRemainingTracks(updatedRemainingTracks);
        }
// console.log('localRankedTracks', localRankedTracks);
        setRankedTracks(localRankedTracks);
    };



    // initialize sorting on component mounting
    useEffect(() => {
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


