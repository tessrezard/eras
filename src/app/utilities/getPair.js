// ---------------------------------------GET ONE PAIR ---------------------------------------

export const getPair = (remainingTracks, localRankedTracks) => {
    // check there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    if (remainingTracks.length === 3) {
        const track1 = remainingTracks[0];
        const track2 = remainingTracks[1];
        const id1 = track1.id;
        const id2 = track2.id;
        const eraIndex1 = localRankedTracks.findIndex((trackObj) => trackObj.id == id1);
        const eraIndex2 = localRankedTracks.findIndex((trackObj) => trackObj.id == id2);
        // only remove 1, so all tracks can be sorted
        // one track will be sorted twice (be in two pairs)
        const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== 0 );
        return [
            updatedRemainingTracks,
            { track: track1, eraIndex: eraIndex1 },
            { track: track2, eraIndex: eraIndex2 },
        ];
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
// ------------------------------------------------------------------------------




// ---------------------------------------GET ALL PAIRS ---------------------------------------

export const splitIntoPairs  = (localRankedTracks, remainingTracks) => {
    let pairs = [];
    let remaining = remainingTracks;
     
        for (let i = 0; i < (localRankedTracks.length / 2 ); i++){
            if (remaining.length < 2) {
                pairs.push([remaining])
            }else {
            // console.log('localRankedTracks[i]', localRankedTracks[i]);
            const newPair = getPair(remaining, localRankedTracks);
            const [updatedRemainingTracks, track1, track2 ] = newPair;
            remaining = updatedRemainingTracks;
            const trackPair = [track1, track2]
            pairs.push(trackPair);
        }
    }
    
    return pairs;
}
// --------------------------------------------------------------------------------------------








// ---------------------------------------GET ONE TRACK ---------------------------------------
export const getRandomTrack = (remainingTracks, localRankedTracks, randomPivotIndex, pivot) => {
    // check there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    // get two random indices
    let randomIndex = Math.floor(Math.random() * remainingTracks.length);

    // check randomIndex2 is different from randomIndex1
    while (randomIndex === randomPivotIndex) {
         randomIndex = Math.floor(Math.random() * remainingTracks.length);
    }

    // get the chosen tracks
    const randomTrack = remainingTracks[randomIndex];

    // find the index of tracks 1 and 2 in localRankedTracks
    const randomTrackId = randomTrack.id;
    const pivotId = pivot.id;

    const eraIndex = localRankedTracks.findIndex((trackObj) => trackObj.id == randomTrackId);
    const pivotEraIndex =  localRankedTracks.findIndex((trackObj) => trackObj.id == pivotId);

    // remove chosen tracks from remainingTracks
    const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== randomIndex );

    // Return the pair of tracks along with their indices
    return [
        updatedRemainingTracks,
        { track: pivot, eraIndex: pivotEraIndex },
        { track: randomTrack, eraIndex: eraIndex },

    ];
}


