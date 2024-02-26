import { allTracks } from "../app/data/current_data/all_tracks";


function quickSort(arr, compareFunction) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
  
    for (const track of arr) {
      const comparison = compareFunction(track, pivot);
  
      if (comparison < 0) {
        left.push(track);
      } else if (comparison > 0) {
        right.push(track);
      } else {
        equal.push(track);
      }
    }
  
    return quickSort(left, compareFunction).concat(equal, quickSort(right, compareFunction));
  }
  
  // Example usage:
  const tracksCopy = [...allTracks]; // Your array of 277 tracks
  
  function compareTracks(track1, track2) {
    // Implement your preference logic here.
    // Return a negative number if track1 is preferred,
    // a positive number if track2 is preferred,
    // and 0 if they are considered equal.
    // Example:
    // if track1 is preferred, return -1;
    // if track2 is preferred, return 1;
    // if no preference, return 0;
  }
  
  const sortedTracks = quickSort(tracksCopy, compareTracks);
  console.log(sortedTracks);
  