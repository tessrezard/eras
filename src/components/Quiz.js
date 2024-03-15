import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreferenceSortedTracks, updatePreferencePoints } from '../store/slices/preference_sorted_slice';
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { getPair } from "../app/utilities/getPair";
import FullSizeAllTracks from "./FullSizeAllTracks";



const Quiz = ({ tracks, setRankedTracks, rankedTracks, setTracksToSort }) => {
    const dispatch = useDispatch();
     const [localRankedTracks, setLocalRankedTracks] = useState([...rankedTracks]);
    const preferenceSortedTracks = useSelector(state => state.preferenceSorted);

    const [orderOption, setOrderOption] = useState('eraOrderOption')

    const [sorting, setSorting] = useState("preference")


    const [remainingTracks, setRemainingTracks] = useState([...rankedTracks]);

    // const [sortedTracks, setSortedTracks] = useState([...tracks]);

    const [trackPair, setTrackPair] = useState([]);
    const [track0, setTrack0] = useState(null);
    const [track1, setTrack1] = useState(null);

    const [userPreferences, setUserPreferences] = useState([]);
    const [tracksPoints, setTracksPoints] = useState([]);
    const [preferences, setPreferences] = useState({});

    const updateTrackPoints = (trackId, points) => {
        dispatch(updatePreferencePoints({ trackId, points }));
    };




    // -------------------------------------- SORTING LOGIC --------------------------------------
    const initializeSorting = () => {

        // setRankedTracks([tracks?.map(track => ({...track, points: tracks.length/2}))]);



        //--------- INITIAL PAIRING ----------
        const callGetPair = getPair(remainingTracks);
        const [updatedRemainingTracks, pairTrack1, pairTrack2] = callGetPair;

        setTrackPair([pairTrack1, pairTrack2]);
        setTrack0(pairTrack1.track);
        setTrack1(pairTrack2.track);
        setRemainingTracks(updatedRemainingTracks);
    };



    // -------------------------------------- HANDLE CLICK LOGIC --------------------------------------

    const handlePreference = (preferredTrack, lessPreferredTrack) => {

        console.log(preferredTrack,'preferredTrack' )
        setUserPreferences((prevPreferences) => [...prevPreferences, preferredTrack]);

        const updatedPreferences = { ...preferences };
        if (!updatedPreferences[lessPreferredTrack.id]) {
            updatedPreferences[lessPreferredTrack.id] = [];
        }
        updatedPreferences[lessPreferredTrack.id].push(preferredTrack.id);
        setPreferences(updatedPreferences);

        // setTracksPoints((prevPoints) => {
        //     const updatedPoints = [...prevPoints];
        //     updatedPoints[preferredTrack.eraIndex].points += 1;
        //     return updatedPoints;
        // });

        // i need to somehow allow for a caveat for if there is only one left, then match it against another an already sorted track.
        if (remainingTracks.length > 2) {
            const callGetNewPair = getPair(remainingTracks);
            const [updatedRemainingTracks, newPairTrack1, newPairTrack2] = callGetNewPair;
            setTrackPair([newPairTrack1, newPairTrack2]);
            setTrack0(newPairTrack1.track);
            setTrack1(newPairTrack2.track);
            setRemainingTracks(updatedRemainingTracks);
        }

    };



    // const justSortedTracks = userPreferences.map(({ track }) => track);

    for (let i = 0; i < userPreferences.length; i++) {
        try {
            localRankedTracks[userPreferences[i].eraIndex].points = localRankedTracks[userPreferences[i].eraIndex].points + 1;
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        initializeSorting();
    }, []);

    useEffect(() => {
        setRemainingTracks(tracks);
    }, [tracks])

    useEffect(() => {
        setRankedTracks(localRankedTracks);
        setTracksToSort(remainingTracks);
    }, [remainingTracks])

    return (
        <>
            <div className="quiz-container" >
                {trackPair.length === 2 && (
                    <>
                        <h2>Which song do you prefer?</h2>
                        <div className="quiz-options-container">
                            <QuizSongOption
                                track={track0}
                                onClick={() => handlePreference(trackPair[0], trackPair[1])}
                            />
                            <QuizSongOption
                                track={track1}
                                onClick={() => handlePreference(trackPair[1], trackPair[0])}
                            />
                        </div>

                    </>
                )}
                {trackPair.length === 1 && (
                    <p>Only one track left. Last choice!</p>
                )}
                {trackPair.length === 0 && (
                    <p>All tracks have been sorted. User preferences: {JSON.stringify(userPreferences)}</p>
                )}
            </div>

            {/* <Condensed tracks={localRankedTracks} sortType='preference' />
            <FullSizeAllTracks tracks={localRankedTracks} sortType={sorting.toLowerCase()} orderOption={orderOption} /> */}


        </>

    );
};
export default Quiz;


