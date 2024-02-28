import React, { useState, useEffect, useReducer } from "react";
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import QuizSongOption from "./QuizSongOption";
import { testTracks } from "../app/data/current_data/test_data";
import { mergeSort } from "../app/utilities/sortByPreference";
import Filters from "./Filters";

const Quiz = ({ tracks }) => {

    const [quizFiltered, setQuizFiltered] = useState([]);

    const [sortedTracks, setSortedTracks] = useState([...testTracks]);
    const [trackPair, setTrackPair] = useState([]);
    const [track0, setTrack0] = useState(null);
    const [track1, setTrack1] = useState(null);
    const [userPreferences, setUserPreferences] = useState([]);
    const [tracksPoints, setTracksPoints] = useState([]);
    const [preferences, setPreferences] = useState({});
    useEffect(() => {
        initializeSorting();
    }, [tracks]);




    const initializeSorting = () => {
        const initialPoints = testTracks.map((track) => ({ ...track, points: 0 }));
        setTracksPoints(initialPoints);
        const newTrackPair = getNewRandomTrackPair();
        setTrackPair(newTrackPair);
        setTrack0(newTrackPair[0].track);
        setTrack1(newTrackPair[1].track);
    };

    const getNewRandomTrackPair = () => {
        const remainingTracks = [...sortedTracks];
        const randomIndex1 = Math.floor(Math.random() * remainingTracks.length);
        const track1 = remainingTracks.splice(randomIndex1, 1)[0];

        const randomIndex2 = Math.floor(Math.random() * remainingTracks.length);
        const track2 = remainingTracks.splice(randomIndex2, 1)[0];

        return [
            { track: track1, index: randomIndex1 },
            { track: track2, index: randomIndex2 },
        ];
    };

    const handlePreference = (preferredTrack, lessPreferredTrack) => {
        setUserPreferences((prevPreferences) => [...prevPreferences, preferredTrack]);


        // TESTING -------------
        const updatedPreferences = { ...preferences }; 

        if (!updatedPreferences[lessPreferredTrack.id]) {
            updatedPreferences[lessPreferredTrack.id] = [];
        }

        updatedPreferences[lessPreferredTrack.id].push(preferredTrack.id);

        setPreferences(updatedPreferences);
        // END TESTING -------------

console.log('preferences', preferences);

        setTracksPoints((prevPoints) => {
            const updatedPoints = [...prevPoints];
            updatedPoints[preferredTrack.index].points += 1;
            return updatedPoints;
        });

        const remainingTracks = sortedTracks.filter(
            (track) => track.id !== preferredTrack.id
        );
        setSortedTracks(remainingTracks);

        const newTrackPair = getNewRandomTrackPair();
        setTrackPair(newTrackPair);
        setTrack0(newTrackPair[0].track);
        setTrack1(newTrackPair[1].track);

    };


    function compareTracks(track1, track2) {
        // Check if there are recorded preferences for track1
        if (preferences[track1.id]) {
            // If track2 is preferred over track1, move track1 lower in the sorted order
            if (preferences[track1.id].includes(track2.id)) {
                return 1;
            }
        }

        // Check if there are recorded preferences for track2
        if (preferences[track2.id]) {
            // If track1 is preferred over track2, move track2 lower in the sorted order
            if (preferences[track2.id].includes(track1.id)) {
                return -1;
            }
        }

        // Default: no preference, maintain the original order
        return 0;
    }


    const mergeSortedTracks = mergeSort(testTracks, compareTracks);

    // console.log('mergeSortedTracks', mergeSortedTracks)
    // -------------------------------------------------------  END TESTING -------------------------------------------------------

    console.log('quizFiltered', quizFiltered)

    return (
        <>
            <Filters inputTracks={tracks} setQuizFiltered={setQuizFiltered}/>
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

            <Condensed tracks={quizFiltered} sortType='preference' />

        </>

    );
};
export default Quiz;


