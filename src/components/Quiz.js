import React, { useState, useEffect, useReducer } from "react";
import '../styles/CSS/main.css';
import Condensed from "./Condensed";
import { allTracks } from "../app/data/current_data/all_tracks";
import QuizSongOption from "./QuizSongOption";



const Quiz = ({tracks}) => {

    // let TracksCopy = [...tracks];

    // const [sortedTracks, setSortedTracks] = useState([...tracks]);
    // const [tracksPoints, setTracksPoints] = useState([...tracks]);

    // const [trackPair, setTrackPair] = useState([]);
    // const [track0, setTrack0] = useState(null);
    // const [track1, setTrack1] = useState(null);
    // const [userPreferences, setUserPreferences] = useState([]);

    // useEffect(() => {
    //     // Set the initial track pair
    //     const newTrackPair = getNewRandomTrackPair();
    //     setTrackPair(newTrackPair);
    //     setTrack0(newTrackPair[0].track);
    //     setTrack1(newTrackPair[1].track);

    // }, [sortedTracks]); // Dependency on sortedTracks to trigger re-render when it changes




    // const getNewRandomTrackPair = () => {
    //     // Get a random pair of tracks from the remaining tracks in sortedTracks
    //     const remainingTracks = [...sortedTracks]; // Copy the array
    //     const randomIndex1 = Math.floor(Math.random() * remainingTracks.length);
    //     const track1 = remainingTracks.splice(randomIndex1, 1)[0];

    //     const randomIndex2 = Math.floor(Math.random() * remainingTracks.length);
    //     const track2 = remainingTracks.splice(randomIndex2, 1)[0];

    //     return [{ track: track1, index: randomIndex1 }, { track: track2, index: randomIndex2 }];
    // };





    // const handlePreference = (preferredTrack) => {
    //     console.log('preferredTrack', preferredTrack.track);

    //     console.log('preferredTrack', preferredTrack.index);

    //     console.log('tracksPoints', tracksPoints[preferredTrack.index].points);

    //     // Update track points
    //     setTracksPoints((prevPoints) => {
    //         const updatedPoints = [...prevPoints];
    //         updatedPoints[preferredTrack.index].points += 1;
    //         return updatedPoints;
    //     });

    //     console.log('tracksPoints', tracksPoints[preferredTrack.index].points);

    //     console.log('tracksPoints', tracksPoints[preferredTrack.index].points);


    //     setUserPreferences((prevPreferences) => [...prevPreferences, preferredTrack]);


    //     // Remove the preferred track from the sortedTracks array
    //     const remainingTracks = sortedTracks.filter((track) => track.id !== preferredTrack.id);

    //     // Update the sortedTracks array
    //     setSortedTracks(remainingTracks);

    //     // Get a new pair of tracks for the next comparison
    //     const newTrackPair = getNewRandomTrackPair();
    //     setTrackPair(newTrackPair);

    // };



    const [sortedTracks, setSortedTracks] = useState([...tracks]);
    const [trackPair, setTrackPair] = useState([]);
    const [track0, setTrack0] = useState(null);
    const [track1, setTrack1] = useState(null);
    const [userPreferences, setUserPreferences] = useState([]);
    const [tracksPoints, setTracksPoints] = useState([]);
  
    useEffect(() => {
      initializeSorting();
    }, [tracks]);
  
    const initializeSorting = () => {
      const initialPoints = tracks.map((track) => ({ ...track, points: 0 }));
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
  
    const handlePreference = (preferredTrack) => {
      setUserPreferences((prevPreferences) => [...prevPreferences, preferredTrack]);
  
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
  

console.log('userPreferences', userPreferences)

    return (
        <>
            <h1>Quiz</h1>
            <div>
                {trackPair.length === 2 && (
                    <>
                        <h2>Which song do you prefer?</h2>

                        <QuizSongOption
                            track={track0}
                            onClick={() => handlePreference(trackPair[0])}
                        />
                        <QuizSongOption
                            track={track1}
                            onClick={() => handlePreference(trackPair[1])}
                        />
                    </>
                )}
                {trackPair.length === 1 && (
                    <p>Only one track left. Last choice!</p>
                )}
                {trackPair.length === 0 && (
                    <p>All tracks have been sorted. User preferences: {JSON.stringify(userPreferences)}</p>
                )}
            </div>

            <Condensed tracks={tracks} sortType='preference' />

        </>

    );
};
export default Quiz;

