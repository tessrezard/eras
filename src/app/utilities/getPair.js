export const getPair = (remainingTracks, localRankedTracks) => {
    // check there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    // get two random indices
    const randomIndex1 = Math.floor(Math.random() * remainingTracks.length);
    let randomIndex2 = Math.floor(Math.random() * remainingTracks.length);

    // check randomIndex2 is different from randomIndex1
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * remainingTracks.length);
    }

    // get the chosen tracks
    const track1 = remainingTracks[randomIndex1];
    const track2 = remainingTracks[randomIndex2];



    // find the index of tracks 1 and 2 in localRankedTracks
    const id1 = track1.id;
    const id2 = track2.id;
    const eraIndex1 = localRankedTracks.findIndex((trackObj) => trackObj.id == id1);
    const eraIndex2 = localRankedTracks.findIndex((trackObj) => trackObj.id == id2);


    // remove chosen tracks from remainingTracks
    const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== randomIndex1 && index !== randomIndex2);

    // Return the pair of tracks along with their indices
    return [
        updatedRemainingTracks,
        { track: track1, eraIndex: eraIndex1 },
        { track: track2, eraIndex: eraIndex2 },
    ];
}


// explained: 
// here we create the pairs to be sorted.
// a pair is an ARRAY. It has two items, each an object.
// the items are objects, with the values 'track' and 'index'
// track is self explanatory.
// index is the original index of the track in ERA ORDER. 
