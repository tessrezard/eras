export const updateGraphTracks = ( latestSortedTracks ) => {
    const eraSortedTracks = latestSortedTracks.sort((a, b) => a.eraIndex - b.eraIndex);

    console.log(eraSortedTracks);
    
    // Iterate through the array and assign points
    latestSortedTracks.forEach((obj, index) => {
    // Calculate points based on ranking (index)
    let points = 201 - index; // Adjust the scale from 1 to 201
    obj.track.points = points;
});

// Print updated objects
latestSortedTracks.forEach(obj => {
    console.log(obj);
});


}