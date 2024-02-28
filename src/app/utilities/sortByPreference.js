
// import React, { useState, useEffect, useReducer } from "react";
// import '../styles/CSS/main.css';
// import Condensed from "./Condensed";
// import QuizSongOption from "./QuizSongOption";
// import { testTracks } from "../app/data/current_data/test_data";
// import { mergeSort } from "../app/utilities/sortByPreference";
// import Filters from "./Filters";



// export function mergeSort(arr, compareFunction) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left, compareFunction), mergeSort(right, compareFunction), compareFunction);
// }

// function merge(left, right, compareFunction) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (compareFunction(left[leftIndex], right[rightIndex]) < 0) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }
















// const [sortedTracks, setSortedTracks] = useState([...testTracks]);
// const [trackPair, setTrackPair] = useState([]);
// const [track0, setTrack0] = useState(null);
// const [track1, setTrack1] = useState(null);
// const [userPreferences, setUserPreferences] = useState([]);
// const [tracksPoints, setTracksPoints] = useState([]);
// const [preferences, setPreferences] = useState({});

