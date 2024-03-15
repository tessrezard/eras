export const getPair = (remainingTracks) => {
    // Ensure there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    // Get two random indices
    const randomIndex1 = Math.floor(Math.random() * remainingTracks.length);
    let randomIndex2 = Math.floor(Math.random() * remainingTracks.length);

    // Ensure randomIndex2 is different from randomIndex1
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * remainingTracks.length);
    }

    // Get the chosen tracks
    const track1 = remainingTracks[randomIndex1];
    const track2 = remainingTracks[randomIndex2];

    // Remove the chosen tracks from remainingTracks
    const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== randomIndex1 && index !== randomIndex2);

    // Return the pair of tracks along with their indices
    return [
        updatedRemainingTracks,
        { track: track1, eraIndex: randomIndex1 },
        { track: track2, eraIndex: randomIndex2 },
    ];
}


 // explained: 
    // here we create the pairs to be sorted. 
    // a pair is an ARRAY. It has two items, each an object.
    // the items are objects, with the values 'track' and 'index'
    // track is self explanatory. 
    // index is the original index of the track in ERA ORDER. 
